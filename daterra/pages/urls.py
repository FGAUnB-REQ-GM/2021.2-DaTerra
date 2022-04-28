from ast import Index
from .views import *
from django.urls import path

urlpatterns = [
    path('', index, name='index'),
    path('cliente/home', cliente_home, name="cliente_home"),
    path('user_choice', user_choice, name='user_choice'),
]