from rest_framework.routers import DefaultRouter
from .views import StorySet, TrackSet

router = DefaultRouter()

router.register(r'stories', StorySet, basename='stories')
router.register(r'tracks', TrackSet, basename='tracks')

urlpatterns = router.urls