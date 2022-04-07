from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'pages/home.html')

def user_choice(request):
    return render(request, 'pages/user_choice.html')