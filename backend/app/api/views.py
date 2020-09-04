from rest_framework import viewsets
from app.models import Stories, Tracks
from .serializers import StorySerializer, TrackSerializer

class StorySet(viewsets.ModelViewSet):
    serializer_class = StorySerializer
    queryset = Stories.objects.all()

class TrackSet(viewsets.ModelViewSet):
    serializer_class = TrackSerializer
    queryset = Tracks.objects.all()