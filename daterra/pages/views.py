from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if request.user.is_authenticated:
        return render(request, 'pages/cliente/home.html')
    else:
        return render(request, 'registration/login.html')

def user_choice(request):
    return render(request, 'pages/user_choice.html')

def cliente_home(request):
    return render(request, 'pages/cliente/home.html')