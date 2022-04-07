from ast import Index
from .views import *
from django.urls import path

urlpatterns = [
    path('registro', register_request, name='registration'),
    path('registro_produtor', register_request_farmer, name='registration_farmer'),
    path('registro_produtor/fazenda', register_request_farmer_farm, name='registration_farmer_farm')
]