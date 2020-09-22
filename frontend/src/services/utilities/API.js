import APICore from "./Core";

const storiesURL = "stories";
const tracksURL = "tracks";
const trackImagesURL = "track_images";
const tagsURL = "tags";
const playlistsURL = "playlists";
const spotifyFetch = "spotify";
const promptsURL = "prompts";

export const apiStories = new APICore({
  getAll: true, // getAll    (url)
  getSingle: true, // getSingle (url, ID)
  post: true, // post      (url, ObjectToCommit)
  put: true, // put       (url, ID, ObjectToCommit)
  patch: true, // patch     (url, ID, ObjectToCommit)
  remove: true, // remove    (url, ID)
  url: storiesURL,
});

export const apiTracks = new APICore({
  getAll: true, // getAll    (url)
  getSingle: true, // getSingle (url, ID)
  post: true, // post      (url, ObjectToCommit)
  put: true, // put       (url, ID, ObjectToCommit)
  patch: true, // patch     (url, ID, ObjectToCommit)
  remove: true, // remove    (url, ID)
  url: tracksURL,
});

export const apiTrackImages = new APICore({
  getAll: true, // getAll    (url)
  getSingle: true, // getSingle (url, ID)
  post: true, // post      (url, ObjectToCommit)
  put: true, // put       (url, ID, ObjectToCommit)
  patch: true, // patch     (url, ID, ObjectToCommit)
  remove: true, // remove    (url, ID)
  url: trackImagesURL,
});

export const apiTags = new APICore({
  getAll: true, // getAll    (url)
  getSingle: true, // getSingle (url, ID)
  post: true, // post      (url, ObjectToCommit)
  put: true, // put       (url, ID, ObjectToCommit)
  patch: true, // patch     (url, ID, ObjectToCommit)
  remove: true, // remove    (url, ID)
  url: tagsURL,
});

export const apiPlaylists = new APICore({
  getAll: true, // getAll    (url)
  getSingle: true, // getSingle (url, ID)
  post: true, // post      (url, ObjectToCommit)
  put: true, // put       (url, ID, ObjectToCommit)
  patch: true, // patch     (url, ID, ObjectToCommit)
  remove: true, // remove    (url, ID)
  url: playlistsURL,
});

export const apiSpotify = new APICore({
  getAll: true, // getAll    (url)
  url: spotifyFetch,
});

export const apiPrompts = new APICore({
  getAll: true, // getAll    (url)
  url: promptsURL,
});

export default apiStories;
