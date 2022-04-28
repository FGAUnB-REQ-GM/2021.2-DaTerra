from ast import Index
from .views import *
from django.urls import path

urlpatterns = [
    path('', index, name='index'),
    path('cliente/home', cliente_home, name="cliente_home"),
    path('cliente/pedidos', cliente_my_orders, name="my_orders"),
    path('cliente/buscar_produtos', view_products, name="search_items"),
    path('cliente/buscar_produtos/pedido', fazer_pedido, name ="fazer_pedido"),
    path('produtor/vendas', produtor_my_sales, name="my_sales"),
    path('produtor/produtos', produtor_my_products, name="my_products"),
    path('produtor/editar_produto', produtor_update_product, name="product_edit"),
    path('user_choice', user_choice, name='user_choice'),
]