from django.shortcuts import render, redirect

from user.models import Order, FarmProduct, User
from user.forms import OrderForm, OrderAvaliacaoForm, OrderAvaliacao2Form, UpdateFarmProductForm, FarmProductForm

# Create your views here.
def index(request):
    if request.user.is_authenticated:

        context = {
            "user": request.user
        }

        return render(request, 'pages/cliente/home.html', context)
    else:
        return render(request, 'registration/login.html')

def user_choice(request):
    return render(request, 'pages/user_choice.html')

def cliente_home(request):
    return render(request, 'pages/cliente/home.html')

def cliente_my_orders(request):
    # Get all orders related to the user
    orders = Order.objects.filter(buyer=request.user.id)

    # Process all data
    array_order = []
    for order in orders:
        product = FarmProduct.objects.filter(id=order.product).first()
        seller = User.objects.filter(id=order.seller).first()

        order_obj = {
            "id": order.id,
            "seller": seller.cellphone,
            "date_buy": str(order.date_buy),
            "amount_buy": order.amount_buy,
            "buyer_review": order.buyer_review,
            "seller_review": order.seller_review,
            "status": order.status,
            "product": {
                "id": product.id,
                "status": order.status,
                "name": product.name_product,
                "price": product.price,
                "unit": product.amount_type,
                "total": product.price * order.amount_buy,
            },
        }
        array_order += [order_obj]

    context = {
        "orders": array_order,
    }

    if request.method == "POST":
        request.POST._mutable = True
        order_instance = Order.objects.filter(id=request.POST['product_id']).first()

        if order_instance.status == 'andamento':
            request.POST['status'] = 'andamento2'
        elif order_instance.status == 'andamento3':   
            request.POST['status'] = 'finalizado'

        form = OrderAvaliacaoForm(data=request.POST, instance=order_instance)
        if form.is_valid():
            form.save()
            return render(request, 'pages/cliente/home.html')

    return render(request, 'pages/cliente/my_orders.html', context)


def produtor_my_sales(request):
    # Get all orders related to the user
    orders = Order.objects.filter(seller=request.user.id)

    # Process all data
    array_order = []
    for order in orders:
        product = FarmProduct.objects.filter(id=order.product).first()
        buyer = User.objects.filter(id=order.buyer).first()

        order_obj = {
            "id": order.id,
            "seller": order.seller,
            "buyer": buyer.cellphone,
            "date_buy": str(order.date_buy),
            "amount_buy": order.amount_buy,
            "buyer_review": order.buyer_review,
            "seller_review": order.seller_review,
            "status": order.status,
            "product": {
                "id": product.id,
                "status": order.status,
                "name": product.name_product,
                "price": product.price,
                "unit": product.amount_type,
                "total": product.price * order.amount_buy,
            },
        }
        array_order += [order_obj]

    context = {
        "orders": array_order,
    }

    if request.method == "POST":
        order_instance = Order.objects.filter(id=request.POST['product_id']).first()
        
        request.POST._mutable = True

        if order_instance.status == 'andamento':
            request.POST['status'] = 'andamento3'
            print(request.POST['status'])
        elif order_instance.status == 'andamento2':
            request.POST['status'] = 'finalizado'


        form = OrderAvaliacao2Form(data=request.POST, instance=order_instance)

        if form.is_valid():
            form.save()
            return render(request, 'pages/cliente/home.html')

    return render(request, 'pages/produtor/my_sales.html', context)



def produtor_my_products(request):
    # Get all products related to the user
    products = FarmProduct.objects.filter(user=request.user.id)

    # Process all data
    array_products = []

    for product in products:
        product_obj = {
            "id": product.id,
            "img": product.picture,
            "name": product.name_product,
            "qtd": product.amount,
            "price": product.price,
            "unit": product.amount_type,
            "type": product.type,
        }
        array_products += [product_obj]

    context = {
        "products": array_products,
        "edit_form": UpdateFarmProductForm(),
        "create_form": UpdateFarmProductForm(),
    }

    if request.method == "POST":
        request.POST._mutable = True
        request.POST['user'] = request.user.id
        form = FarmProductForm(data=request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'pages/cliente/home.html')
        else:
            print(form.errors)

    return render(request, 'pages/produtor/my_products.html', context)

def produtor_update_product(request):
    if request.method == "POST":
        request.POST._mutable = True
        product_instance = FarmProduct.objects.filter(id=request.POST['product_id']).first()
        form = UpdateFarmProductForm(data=request.POST, instance=order_instance)
        if form.is_valid():
            form.save()
            return render(request, 'pages/cliente/home.html')
        else:
            print(form.errors)

def view_products(request):
    # Get all products from the website
    products = FarmProduct.objects.all()

    # Process all data
    array_products = []

    for product in products:
        product_obj = {
            "id": product.id,
            "img": product.picture,
            "description": product.description,
            "seller": product.user,
            "name": product.name_product,
            "qtd": product.amount,
            "price": product.price,
            "unit": product.amount_type,
            "type": product.type,
        }
        array_products += [product_obj]

    context = {
        "products": array_products,
        "edit_form": UpdateFarmProductForm(),
        "create_form": UpdateFarmProductForm(),
    }

    return render(request, 'pages/cliente/search_items.html', context)

def fazer_pedido(request):
    if request.method == "POST":
        request.POST._mutable = True
        request.POST['buyer'] = request.user.id
        request.POST['buyer_review'] = 0
        request.POST['seller_review'] = 0
        request.POST['status'] = 'andamento'
    
        form = OrderForm(data=request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'pages/cliente/home.html')
        else:
            print(form.errors)