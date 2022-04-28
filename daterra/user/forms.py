from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User, UserFarm


# Create your forms here.
class NewConsumerForm(UserCreationForm):
	class Meta:
		model = User
		fields = ("complete_name", "cpf", "email", "birthday_date", "cellphone", "user_type")

	def save(self, commit=True):
		user = super(NewConsumerForm, self).save(commit=False)
		user.email = self.cleaned_data['email']
		if commit:
			user.save()
		return user


class UserFarmForm(forms.ModelForm):
    class Meta:
        model = UserFarm
        fields = ("user", "name", "picture", "address", "cep", "city", "state")

