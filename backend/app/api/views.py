from rest_framework import viewsets, generics
from rest_framework import status
from rest_framework.response import Response
from django.http import Http404
from django.core.mail import send_mail
from django.template.loader import render_to_string

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

    def create(self, request):
        
        try:    
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            story = self.perform_create(serializer)
            
            msg_html = render_to_string('OPEmail.html', {
                'story' : story.story, 
                'name': story.name,
                'id': story.id
            })

            subject = 'Thanks for your story submission!'
            message = 'Hi there %s!\n\nWe want you to know that we appreicate your submission! With your contributions, you\'re\
                       helping our community grow.\n\nYour serial code ID is: %s.\n\nStory: %s' % (story.name, story.id, story.story)
            recipients = [story.email]
            send_mail(
                subject=subject,
                message=message,
                from_email=None,
                recipient_list=recipients,
                fail_silently=False,
                html_message=msg_html
            )
            
            headers = self.get_success_headers(serializer.data)
            return Response(
                serializer.data, 
                status=status.HTTP_201_CREATED, 
                headers=headers
            )
        except Http404:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def perform_create(self, serializer):
        story = serializer.save()
        return story

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