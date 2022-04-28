from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core import validators
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.core.mail import send_mail
from numpy import product


class UserManager(BaseUserManager):
    def _create_user(self, cpf, complete_name, birthday_date, email, cellphone, password, is_staff, is_superuser, **extra_fields):
        now = timezone.now()
        if not cpf:
            raise ValueError(_('There must be a CPF'))
        email = self.normalize_email(email)
        user = self.model(
            cpf=cpf, complete_name=complete_name,
            birthday_date=birthday_date, email=email,
            cellphone=cellphone,
            is_staff=is_staff, is_active=True, is_superuser=is_superuser,
            last_login=now, date_joined=now, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
        
    def create_user(self, cpf, email=None, password=None, **extra_fields):
        return self._create_user(cpf, email, password, False, False, **extra_fields)

    def create_superuser(self, cpf, complete_name, birthday_date, email, cellphone, password, **extra_fields):
        user=self._create_user(cpf, complete_name, birthday_date, email, cellphone, password, True, True, **extra_fields)
        user.is_active=True
        user.save(using=self._db)
        return user

STATE_CHOICES = (
    ('DF', 'distrito federal'),
    ('SP', 'são paulo'),
)

USER_TYPE_CHOICES = (
    ('cliente', 'CLIENTE'),
    ('produtor', 'PRODUTOR'),
)

PRODUCT_TYPE_CHOICES = (
    ('frutas', 'FRUTA'),
    ('legume', 'LEGUME'),
    ('verduras', 'VERDURA'),
    ('carnes', 'VERDURA'),
    ('grãos', 'VERDURA'),
)
AMOUNT_TYPE_CHOICES = (
    ('Quilogramas', 'KG'),
    ('Unidade', 'UNIDADE'),
    ('Peça', 'UNIDADE'),
    ('Litros', 'UNIDADE'),
)
ORDER_TYPE_CHOICES = (
    ('finalizado', 'FINALIZADO'),
    ('andamento', 'ANDAMENTO'),
    ('andamento2', 'ANDAMENTO'),
    ('andamento3', 'ANDAMENTO'),
)

class User(AbstractBaseUser, PermissionsMixin):
    cpf = models.CharField(_('cpf'), max_length=30, unique=True)
    complete_name = models.CharField(_('complete name'), max_length=30)
    birthday_date = models.DateField(_('birthday_date'))
    email = models.EmailField(_('email address'), max_length=255, unique=True)
    cellphone = models.CharField(_('cellphone'), max_length=30)
    city = models.CharField(_('city'), max_length=255, default='não informado')
    state = models.CharField(max_length=255, choices=STATE_CHOICES, default='DF')
    user_type = models.CharField(max_length=255, choices=USER_TYPE_CHOICES, default='cliente')
    
    is_staff = models.BooleanField(_('staff status'), default=False, help_text=_('Designates whether the user can log into this admin site.'))
    is_active = models.BooleanField(_('active'), default=True, help_text=_('Designates whether this user should be treated as active. Unselect this instead of deleting accounts.'))
    is_trusty = models.BooleanField(_('trusty'), default=False, help_text=_('Designates whether this user has confirmed his account.'))
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)

    USERNAME_FIELD = 'cpf'
    REQUIRED_FIELDS = ['complete_name', 'email', 'cellphone', 'birthday_date', 'user_type']

    objects = UserManager()

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def get_full_name(self):
        return self.complete_name

    def get_short_name(self):
        return self.complete_name.split(' ')[0]

    def email_user(self, subject, message, from_email=None):
        send_mail(subject, message, from_email, [self.email])


def farm_picture_uploader(instance, filename):
    return '/'.join(['media', instance.user.cpf, filename])

def product_picture_uploader(instance, filename):
    return '/'.join(['media', instance.user.cpf, filename, "product"])


class UserFarm(models.Model):
    user = models.OneToOneField(User, on_delete=models.DO_NOTHING, null=False, blank=False)
    name = models.CharField(max_length=255, null=False, blank=False)
    picture = models.ImageField(upload_to=farm_picture_uploader)
    cep = models.CharField(max_length=12, null=False, blank=False)
    address = models.CharField(max_length=255, null=False, blank=False)
    city = models.CharField(max_length=255, null=False, blank=False)
    state = models.CharField(max_length=255, choices=STATE_CHOICES, default='DF')

class FarmProduct(models.Model):
    user = models.BigIntegerField(null=False, blank=False)
    name_product = models.CharField(max_length=255, null=False, blank=False)
    picture = models.ImageField(upload_to=product_picture_uploader, blank=True, null=True)
    description = models.TextField(max_length=255, null=False, blank=False)
    type = models.CharField(max_length=255, choices=PRODUCT_TYPE_CHOICES, null=False, blank=False)
    amount = models.IntegerField(null=False, blank=False)
    amount_type = models.CharField(max_length=255, choices=AMOUNT_TYPE_CHOICES, null=False, blank=False)
    price = models.FloatField(null=False, blank=False)

class Order(models.Model):
    buyer = models.BigIntegerField(null=False, blank=False)
    seller = models.BigIntegerField(null=False, blank=False)
    product = models.BigIntegerField(null=False, blank=False)
    amount_buy = models.IntegerField(null=False, blank=False)
    buyer_review = models.IntegerField(null=True, blank=True)
    seller_review = models.IntegerField(null=True, blank=True)
    status = models.CharField(max_length=255, choices=ORDER_TYPE_CHOICES, null=False, blank=False)
    date_buy = models.DateField(auto_now_add=True, blank=True)