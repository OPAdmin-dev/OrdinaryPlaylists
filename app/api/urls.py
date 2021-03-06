from rest_framework.routers import DefaultRouter

from .views import (
    StorySet,
    TrackSet,
    TrackImageSet,
    TagSet,
    PlaylistSet,
    PromptSet
)

router = DefaultRouter()

router.register(r'stories', StorySet, basename='stories')
router.register(r'tracks', TrackSet, basename='tracks')
router.register(r'track_images', TrackImageSet, basename='track_images')
router.register(r'tags', TagSet, basename='tags')
router.register(r'playlists', PlaylistSet, basename='playlists')
router.register(r'prompts', PromptSet, basename='promts')

urlpatterns = router.urls
