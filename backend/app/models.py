from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils.html import mark_safe


class Prompts(models.Model):

    class Meta:
        db_table = 'Prompts'
        verbose_name_plural = "Prompts"

    prompt = models.CharField(max_length=200, default='Prompt Text')

    def __str__(self):
        return "Prompt: {0}".format(self.prompt)


class Stories(models.Model):

    class Meta:
        db_table = 'stories'
        verbose_name_plural = "Stories"

    name = models.CharField(max_length=200, default="Anonymous", blank=True)
    title = models.CharField(max_length=200, default="Story Title")
    story = models.TextField(default="Story")
    email = models.EmailField(default="test@test.com")
    location = models.CharField(max_length=200, default="Story Location")
    tags = ArrayField(models.CharField(
        max_length=200, default="Tags"), default=list, null=True, blank=True)
    prompt = models.ForeignKey(
        Prompts, on_delete=models.CASCADE, related_name="prompts")

    def __str__(self):
        return "'{0}' written by '{1}' for prompt: '{2}'".format(self.title, self.name, self.prompt.prompt)


class TrackImage(models.Model):

    class Meta:
        db_table = 'track_images'
        verbose_name_plural = "Track Images"

    contributor = models.CharField(max_length=200, default="Contributor Name")
    track = models.ForeignKey(
        'Tracks', on_delete=models.CASCADE, related_name="tracks")
    cover = models.ImageField(upload_to="images/", default="Track Cover")
    email = models.EmailField(default="Contributor's Email")

    def cover_image(self):
        return mark_safe('<img src="%s" width="250" height="350"/>' % self.cover.url)

    def __str__(self):
        return "Proposed cover ({0}) for {1}".format(self.cover, self.track)


class Tracks(models.Model):

    class Meta:
        db_table = 'tracks'
        verbose_name_plural = "Tracks"

    story = models.ForeignKey(
        Stories, on_delete=models.CASCADE, related_name="stories")
    name = models.CharField(max_length=200, default="Track Name")
    artist = models.CharField(max_length=200, default="Artist Name")
    description = models.TextField(
        default="Track Description", blank=True, null=True)
    youtube_link = models.CharField(
        max_length=200, default="Youtube URL", blank=True, null=True)
    tags = ArrayField(models.CharField(
        max_length=200, default="Tags"), default=list, null=True, blank=True)
    email = models.EmailField(default="email_address")
    lyrics = models.TextField(default="Track Lyrics", blank=True, null=True)
    track_image = models.ForeignKey(
        TrackImage, on_delete=models.CASCADE, related_name="track_image", blank=True, null=True)
    social_handle = models.CharField(
        max_length=200, default="Artist Social Handle Link", blank=True, null=True)

    def Image(self):
        return mark_safe('<img src="%s" width="250" height="350"/>' % self.track_image.cover.url)

    def __str__(self):
        return "Track composed by {0}".format(self.artist)


class Tags(models.Model):

    class Meta:
        db_table = 'Tags'
        verbose_name_plural = "Tags"

    tag = models.CharField(max_length=200, default="Tag Name")

    def __str__(self):
        return "Tag: {0}".format(self.tag)


class Playlists(models.Model):

    class Meta:
        db_table = 'playlists'
        verbose_name_plural = "Playlists"

    name = models.CharField(max_length=200, default="Playlist Name")
    description = models.TextField(default="Playlist Description")
    playlist_image = models.ForeignKey(
        TrackImage, on_delete=models.CASCADE, related_name='playlist_image', blank=True, null=True)
    tags = ArrayField(models.CharField(
        max_length=200, default="Tags"), default=list, null=True, blank=True)
    tracks = models.ManyToManyField(Tracks)

    def __str__(self):
        return "{0}".format(self.name)
