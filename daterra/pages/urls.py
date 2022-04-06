from ast import Index
from .views import index
from django.urls import path

urlpatterns = [
    path('', index, name='index'),
]