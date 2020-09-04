import APICore from './Core';

const storiesURL = 'stories';
const tracksURL = 'tracks';
const trackImagesURL = 'track_images';
const tagsURL = 'tags';

export const apiStories = new APICore({
    getAll: true,
    getSingle: true,
    post: true,
    put: true,
    patch: true,
    remove: true,
    url: storiesURL,
})

export const apiTracks = new APICore({
    getAll: true,
    getSingle: true,
    post: true,
    put: true,
    patch: true,
    remove: true,
    url: tracksURL,
})

export const apiTrackImages = new APICore({
    getAll: true,
    getSingle: true,
    post: true,
    put: true,
    patch: true,
    remove: true,
    url: trackImagesURL,
})

export const apiTags = new APICore({
    getAll: true,
    getSingle: true,
    post: true,
    put: true,
    patch: true,
    remove: true,
    url: tagsURL,
})

export default apiStories;