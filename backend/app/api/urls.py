from rest_framework.routers import DefaultRouter
from .views import StorySet, TrackSet, TrackImageSet

router = DefaultRouter()

router.register(r'stories', StorySet, basename='stories')
router.register(r'tracks', TrackSet, basename='tracks')
router.register(r'track_images', TrackImageSet, basename='track_images')

urlpatterns = router.urls