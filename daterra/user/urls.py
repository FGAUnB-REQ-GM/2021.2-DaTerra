from ast import Index
from .views import register_request
from django.urls import path

urlpatterns = [
    path('registro', register_request, name='registro'),
]