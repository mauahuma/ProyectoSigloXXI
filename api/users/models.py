from django.db import models
from django.contrib.auth.models import AbstractUser

CargosEnum = (
    ("ADMINISTRADOR", "administrador"),
    ("CLIENTE", "cliente"),
    ("BODEGA", "bodega"),
    ("COCINERO", "cocinero"),
    ("GARZON", "garzon"),
    ("FINANZAS", "finanzas")
)


class User(AbstractUser):

    email = models.EmailField(unique=True)
    cargo = models.CharField(max_length=100,  null=True)

    #USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
