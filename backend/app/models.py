from django.db import models
from django.contrib.postgres.fields import ArrayField

class Stories(models.Model):

    class Meta:
        db_table = 'stories'

    name = models.CharField(max_length=200, default="Anonymous")
    story = models.TextField(default="Story")

class TrackImage(models.Model):

    class Meta:
        db_table = 'track_images'

    track = models.ForeignKey('Tracks', on_delete=models.CASCADE, related_name="tracks")
    cover = models.ImageField(default="Track Cover")

class Tracks(models.Model):

    class Meta:
        db_table = 'tracks'

    CHILL = 'Chill'
    POP = 'Pop'

    TAGS = [
        (CHILL, 'CHILL'),
        (POP  , 'POP')
    ]

    story = models.ForeignKey(Stories, on_delete=models.CASCADE, related_name="stories")
    name = models.CharField(max_length=200, default="Track Name")
    artist = models.CharField(max_length=200, default="Artist Name")
    description = models.TextField(default="Track Description")
    youtube_link = models.CharField(max_length=200, default="Youtube URL")
    tags = ArrayField(models.CharField(max_length=50, choices=TAGS, default=POP), default=list)
    email = models.EmailField(default="email_address")
    track_image = models.ForeignKey(TrackImage, on_delete=models.CASCADE, related_name="track_image", blank=True, null=True)


