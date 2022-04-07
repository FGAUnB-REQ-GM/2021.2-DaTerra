from ast import Index
from .views import *
from django.urls import path

urlpatterns = [
    path('', index, name='index'),
    path('user_choice', user_choice, name='user_choice'),
]