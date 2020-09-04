from rest_framework.routers import DefaultRouter
from .views import StorySet

router = DefaultRouter()

router.register(r'stories', StorySet, basename='stories')

urlpatterns = router.urls