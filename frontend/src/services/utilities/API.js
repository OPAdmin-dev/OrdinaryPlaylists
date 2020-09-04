import APICore from './Core';

const storiesURL = 'stories';
const tracksURL = 'tracks';

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

export default apiStories;