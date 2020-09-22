from .serializers import (
    StorySerializer,
    TrackSerializer,
    TrackImageSerializer,
    TagSerializer,
    PlaylistSerializer,
    PromptsSerializer
)
from app.models import (
    Stories,
    Tracks,
    TrackImage,
    Tags,
    Playlists,
    Prompts
)
from rest_framework import viewsets, generics
from rest_framework import status
from rest_framework.response import Response
from django.http import Http404
from django.core.mail import send_mail
from django.template.loader import render_to_string
from scripts.OPBot import runBot


class StorySet(viewsets.ModelViewSet):

    serializer_class = StorySerializer
    queryset = Stories.objects.all()

    def create(self, request):

        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            story = self.perform_create(serializer)

            msg_html = render_to_string('StorySubmit.html', {
                'story': story.story,
                'name': story.name,
                'id': story.id
            })

            subject = 'Thanks for your Story Submission!'
            user_message = 'Hi there %s!\n\nWe want you to know that we appreicate your submission! With your contributions, you\'re\
                       helping our community grow.\n\nYour Serial Code ID is: %s.\n\nStory: %s' % (story.name, story.id, story.story)
            recipients = [story.email]
            send_mail(
                subject=subject,
                message=user_message,
                from_email=None,
                recipient_list=recipients,
                fail_silently=False,
                html_message=msg_html
            )

            admin_message = "Heads up! {0} just submitted a story titled '{1}'. Serial Code ID: {2}".format(
                story.name, story.title, story.id)
            runBot(admin_message)

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

    def create(self, request):

        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            track = self.perform_create(serializer)

            msg_html = render_to_string('TrackSubmit.html', {
                'story': track.story.title,
                'title': track.name,
                'artist': track.artist,
                'desc': track.description,
                'yt_link': track.youtube_link,
                'tags': track.tags,
                'lyrics': track.lyrics,
            })

            subject = 'Thanks for your Track Submission!'
            message = 'Hi there %s!\n\nWe want you to know that we appreciate your submission!' % (
                track.artist)
            recipients = [track.email]
            send_mail(
                subject=subject,
                message=message,
                from_email=None,
                recipient_list=recipients,
                fail_silently=False,
                html_message=msg_html
            )

            admin_message = "Heads up! {0} just submitted a track titled '{1}' (Track ID: {2}). The song was\
                inspired by the story '{3}' (Story ID: {4})".format(
                track.artist, track.name, track.id, track.story.title, track.story.id)
            runBot(admin_message)

            headers = self.get_success_headers(serializer.data)
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED,
                headers=headers
            )
        except Http404:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def perform_create(self, serializer):
        track = serializer.save()
        return track


class TrackImageSet(viewsets.ModelViewSet):

    lookup_field = 'track'
    serializer_class = TrackImageSerializer
    queryset = TrackImage.objects.all()

    def create(self, request):

        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            image = self.perform_create(serializer)

            msg_html = render_to_string('CoverSubmit.html', {
                'track': image.track.name,
                'location': image.cover.url,
                'track_artist': image.track.artist,
                'contributor': image.contributor
            })

            subject = 'Thanks for your Album Art submission!'
            message = 'Hi there %s!\n\nWe want you to know that we appreicate your submission!' % (
                image.contributor)
            recipients = [image.email]
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
        image = serializer.save()
        return image


class TagSet(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tags.objects.all()


class PlaylistSet(viewsets.ModelViewSet):
    serializer_class = PlaylistSerializer
    queryset = Playlists.objects.all()


class PromptSet(viewsets.ModelViewSet):
    serializer_class = PromptsSerializer
    queryset = Prompts.objects.all()
