from rest_framework import serializers
from app.models import Stories

class StorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Stories
        fields = (
            'id', 'name', 'story', 'cover'
        )