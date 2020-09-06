from rest_framework import viewsets

from app.models import (
    Stories, 
    Tracks, 
    TrackImage, 
    Tags, 
    Playlists
)

from .serializers import ( 
    StorySerializer, 
    TrackSerializer, 
    TrackImageSerializer, 
    TagSerializer,
    PlaylistSerializer
)

class StorySet(viewsets.ModelViewSet):
    serializer_class = StorySerializer
    queryset = Stories.objects.all()

class TrackSet(viewsets.ModelViewSet):
    serializer_class = TrackSerializer
    queryset = Tracks.objects.all()

class TrackImageSet(viewsets.ModelViewSet):
    lookup_field = 'track'
    serializer_class = TrackImageSerializer
    queryset = TrackImage.objects.all()

class TagSet(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tags.objects.all()

class PlaylistSet(viewsets.ModelViewSet):
    serializer_class = PlaylistSerializer
    queryset = Playlists.objects.all()
