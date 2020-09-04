from rest_framework import viewsets
from app.models import Stories
from .serializers import StorySerializer

class StorySet(viewsets.ModelViewSet):
    serializer_class = StorySerializer
    queryset = Stories.objects.all()