import APICore from './Core';

const storiesURL = 'stories';

export const apiStories = new APICore({
    getAll: true,
    getSingle: true,
    post: true,
    put: true,
    patch: true,
    remove: true,
    url: storiesURL,
})

export default apiStories;