from rest_framework import serializers
from app.models import Stories, Tracks, TrackImage

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
            'id', 'story', 'name', 'artist', 'description', 
            'youtube_link', 'tags', 'email', 'track_image'
        )

class TrackImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = TrackImage
        fields = (
            'id', 'track', 'cover',
        )