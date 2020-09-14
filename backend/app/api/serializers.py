from rest_framework import serializers
from app.models import Stories, Tracks, TrackImage, Tags, Playlists

class StorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Stories
        fields = (
            'id', 'name', 'story', 'title', 'email', 'location', 'tags'
        )

class TrackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tracks
        fields = (
            'id', 'story', 'name', 'artist', 'description', 
            'youtube_link', 'tags', 'email', 'lyrics',
            'track_image', 'social_handle'
        )

class TrackImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = TrackImage
        fields = (
            'id', 'track', 'cover', 'contributor', 'email',
        )

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tags
        fields = (
            'id', 'tag',
        )

class PlaylistSerializer(serializers.ModelSerializer):

    tracks = TrackSerializer(read_only=True, many=True)

    class Meta:
        model = Playlists
        fields = (
            'id', 'name', 'description', 
            'playlist_image', 'tags', 'tracks', 
        )