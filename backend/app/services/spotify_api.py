import spotipy
from spotipy.oauth2 import SpotifyOAuth
from appsecrets import (
    USERNAME,
    SPOTIFY_CLIENT_ID,
    SPOTIFY_APP_SECRET,
    SPOTIFY_REDIRECT_URI,
    SCOPE
)


def fetchPlaylistData():
    try:
        token = spotipy.util.prompt_for_user_token(username=USERNAME,
                                                   scope=SCOPE,
                                                   client_id=SPOTIFY_CLIENT_ID,
                                                   client_secret=SPOTIFY_APP_SECRET,
                                                   redirect_uri=SPOTIFY_REDIRECT_URI)
        if token:
            sp = spotipy.Spotify(auth=token)
            data = sp.current_user_playlists()
            playlists = data['items']
            playlist_mod = []
            for playlist in playlists:
                mod_playlist = {}
                mod_playlist['id'] = playlist['id']
                mod_playlist['name'] = playlist['name']
                mod_playlist['cover'] = playlist['images'][0]['url']
                mod_playlist['description'] = playlist['description']
                mod_playlist['tracks'] = []
                tracks = sp.playlist_items(playlist['id'])['items']
                for track in tracks:
                    track_name = track['track']['name']
                    track_artist = track['track']['artists'][0]['name']
                    track_url = track['track']['external_urls']['spotify']
                    track_cover = track['track']['album']['images'][0]['url']
                    track_release = track['track']['album']['release_date']
                    track_preview = track['track']['preview_url']
                    track_object = {
                        'track_name': track_name,
                        'track_artist': track_artist,
                        'track_url': track_url,
                        'track_cover': track_cover,
                        'track_release': track_release,
                        'preview_url': track_preview
                    }
                    mod_playlist['tracks'].append(track_object)
                playlist_mod.append(mod_playlist)
            return playlist_mod
    except:
        return None


if __name__ == "__main__":
    playlists = fetchPlaylistData()
    print(playlists)
