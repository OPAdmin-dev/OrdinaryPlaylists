from django.shortcuts import render
from spotify_api import fetchPlaylistData
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status


def SpotifyClient(request):
    try:
        playlists = fetchPlaylistData()
        return HttpResponse(content=playlists, status=status.HTTP_200_OK)
    except:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
