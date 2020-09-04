from django.contrib import admin
from .models import Stories, Tracks, TrackImage, Tags

admin.site.register(Stories)
admin.site.register(Tracks)
admin.site.register(TrackImage)
admin.site.register(Tags)