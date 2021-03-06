"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from project import settings
from rest_framework_jwt.views import obtain_jwt_token
from django.views.generic import TemplateView
from django.views.static import serve
from django.views.decorators.cache import never_cache
from django.conf.urls import url
from app.views import SpotifyClient

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dev-only/', include('app.api.urls')),
    path('', include('app.urls')),
    path('', TemplateView.as_view(template_name="index.html")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Handle error p
handler404 = 'app.views.handler404'
