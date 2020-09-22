from django.urls import path
from . import views

urlpatterns = [
    path('api/spotify', views.SpotifyClient, name='spotify')
]
