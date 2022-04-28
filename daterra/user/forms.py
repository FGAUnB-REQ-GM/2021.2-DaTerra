from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import *

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

class FarmProductForm(forms.ModelForm):
    class Meta:
        model = FarmProduct
        fields = ("user", "name_product", "picture", "description", "type", "amount", "amount_type", "price")


class UpdateFarmProductForm(forms.ModelForm):
    class Meta:
        model = FarmProduct
        fields = ("name_product", "picture", "description", "type", "amount", "amount_type", "price")


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ("buyer", "seller", "product", "amount_buy", "buyer_review", "seller_review", "status")


class OrderAvaliacaoForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ("buyer_review", "status")

class OrderAvaliacao2Form(forms.ModelForm):
    class Meta:
        model = Order
        fields = ("seller_review", "status")