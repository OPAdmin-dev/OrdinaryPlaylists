from django.db import models
from django.contrib.postgres.fields import ArrayField

class Stories(models.Model):

    class Meta:
        db_table = 'stories'

    name = models.CharField(max_length=200, default="Anonymous")
    story = models.TextField(default="Story")

    def __str__(self):
        return "Story by: {0}".format(self.name)

class TrackImage(models.Model):

    class Meta:
        db_table = 'track_images'

    track = models.ForeignKey('Tracks', on_delete=models.CASCADE, related_name="tracks")
    cover = models.ImageField(upload_to="images/", default="Track Cover")

class Tracks(models.Model):

    class Meta:
        db_table = 'tracks'

    story = models.ForeignKey(Stories, on_delete=models.CASCADE, related_name="stories")
    name = models.CharField(max_length=200, default="Track Name")
    artist = models.CharField(max_length=200, default="Artist Name")
    description = models.TextField(default="Track Description")
    youtube_link = models.CharField(max_length=200, default="Youtube URL")
    tags = ArrayField(models.CharField(max_length=200, default="Tags"), default=list, null=True, blank=True)
    email = models.EmailField(default="email_address")
    track_image = models.ForeignKey(TrackImage, on_delete=models.CASCADE, related_name="track_image", blank=True, null=True)

    def __str__(self):
        return "Track inspired by {0}".format(self.story)

class Tags(models.Model):

    class Meta:
        db_table = 'Tags'

    tag = models.CharField(max_length=200, default="Tag Name")

    def __str__(self):
        return "Tag: {0}".format(self.tag)

class Playlists(models.Model):

    class Meta:
        db_table = 'playlists'

    name = models.CharField(max_length=200, default="Playlist Name")
    description = models.TextField(default="Playlist Description")
    playlist_image = models.ForeignKey(TrackImage, on_delete=models.CASCADE, related_name='playlist_image', blank=True, null=True)
    tags = ArrayField(models.CharField(max_length=200, default="Tags"), default=list, null=True, blank=True)
    tracks = models.ManyToManyField(Tracks)

    def __str__(self):
        return "{0}".format(self.name)