from django.shortcuts import  render, redirect
from .forms import NewConsumerForm
from django.contrib.auth import login
from django.utils.translation import activate

activate('pt-br')

def register_request(request):
	errors = []

	if request.method == "POST":
		form = NewConsumerForm(request.POST)
		if form.is_valid():
			user = form.save()
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