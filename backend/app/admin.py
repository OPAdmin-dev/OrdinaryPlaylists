from django.contrib import admin
from django.utils.html import mark_safe

from .models import (
    Stories, 
    Tracks, 
    TrackImage, 
    Tags, 
    Playlists
)

admin.site.register(Stories)
admin.site.register(Tracks)

@admin.register(TrackImage)
class TrackImageAdmin(admin.ModelAdmin):

    readonly_fields = ('current_cover',)
    

admin.site.register(Tags)
admin.site.register(Playlists)