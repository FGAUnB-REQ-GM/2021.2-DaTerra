from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User


# Create your forms here.
class NewConsumerForm(UserCreationForm):
	class Meta:
		model = User
		fields = ("complete_name", "cpf", "email", "birthday_date", "cellphone")

	def save(self, commit=True):
		user = super(NewConsumerForm, self).save(commit=False)
		user.email = self.cleaned_data['email']
		if commit:
			user.save()
		return user