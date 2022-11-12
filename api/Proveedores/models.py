
from django.db import models

# Create your models here.


class Proveedor(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    numero_Contacto = models.IntegerField(unique=True)
    email = models.CharField(max_length=255, default="", unique=True)
    Empresa = models.CharField(max_length=255, default="", unique=True)
    direccion = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.nombre
