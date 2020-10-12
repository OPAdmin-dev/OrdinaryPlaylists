from django.urls import path
from . import views

urlpatterns = [
    path('dev-only/spotify/', views.SpotifyClient, name='spotify'),
]
