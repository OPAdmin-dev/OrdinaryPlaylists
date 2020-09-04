from django.db import models

class Stories(models.Model):

    class Meta:
        db_table = 'stories'

    name = models.CharField(max_length=200, default="Anonymous")
    story = models.TextField(default="Story")
    cover = models.ImageField(upload_to='images/')
