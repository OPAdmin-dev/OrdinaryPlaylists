from django.shortcuts import render
from app.services.spotify_api import fetchPlaylistData
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
import json

from django.http.response import HttpResponseRedirect


def handler404(request, *args, **kwargs):
    return HttpResponseRedirect('/')


def SpotifyClient(request):
    try:
        playlists = fetchPlaylistData()
        return HttpResponse(json.dumps(playlists), status=status.HTTP_200_OK)
    except:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
