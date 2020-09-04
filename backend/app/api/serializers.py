from rest_framework import serializers
from app.models import Stories, Tracks

class StorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Stories
        fields = (
            'id', 'name', 'story',
        )

class TrackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tracks
        fields = (
            'id', 'story', 'name', 'artist', 'cover', 'proposed_covers',
            'description', 'youtube_link', 'tags', 'email'
        )