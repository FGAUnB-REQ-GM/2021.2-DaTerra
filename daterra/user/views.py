from django.shortcuts import  render, redirect
from django.contrib.auth import authenticate, login
from .forms import NewConsumerForm, UserFarmForm
from django.contrib.auth import login
from django.utils.translation import activate

activate('pt-br')

def register_request(request):
	errors = []
	if request.method == "POST":
		request.POST._mutable = True
		request.POST['user_type'] = 'cliente'
		form = NewConsumerForm(request.POST)
		if form.is_valid():
			form.save()
			user_login = authenticate(
				username=request.POST.get('cpf'),
				password=request.POST.get('password1')
			)
			login(request, user_login)
			return redirect("index")
		else:
			errors = form.errors

	form = NewConsumerForm()
	return render (
        request=request,
        template_name="registration/registration.html",
        context={
			"form":form,
			"errors": errors,
		})

def register_request_farmer(request):
	errors = []
	if request.method == "POST":
		request.POST._mutable = True
		request.POST['user_type'] = 'produtor'
		form = NewConsumerForm(request.POST)
		if form.is_valid():
			form.save()
			user_login = authenticate(
				username=request.POST.get('cpf'),
				password=request.POST.get('password1')
			)
			login(request, user_login)
			return redirect("registration_farmer_farm")
		else:
			errors = form.errors

	form = NewConsumerForm()
	return render (
        request=request,
        template_name="registration/registration_farmer.html",
        context={
			"form":form,
			"errors": errors,
		})

def register_request_farmer_farm(request):
	if not request.user.is_authenticated:
		return redirect("index")
	
	request.POST._mutable = True
	request.POST['user_type'] = 'produtor'
	request.POST['user'] = request.user.id
	errors = []
	if request.method == "POST":
		form = UserFarmForm(request.POST, request.FILES)
		if form.is_valid():
			form.save()
			return redirect("index")
		else:
			errors = form.errors

	form = UserFarmForm()
	return render (
        request=request,
        template_name="registration/registration_farmer_farm.html",
        context={
			"form": form,
			"errors": errors,
		})


def update_account(request):
	errors = []
	if request.method == "POST":
		request.POST._mutable = True
		request.POST['user_type'] = 'cliente'
		form = NewConsumerForm(data=request.POST, instance=request.user)
		if form.is_valid():
			form.save()
			return redirect("index")
		else:
			errors = form.errors

	form = NewConsumerForm()

	request.user.birthday_date = str(request.user.birthday_date)
	return render (
        request=request,
        template_name="registration/update_account.html",
        context={
			"user": request.user,
			"form":form,
			"errors": errors,
		})
