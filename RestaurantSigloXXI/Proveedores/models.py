from django.db import models

# Create your models here.


class Proveedor(models.Model):
    nombre = models.CharField(max_length=100)
    numero_Contacto = models.IntegerField()
    email = models.CharField(max_length=255, default="")
    Empresa = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.nombre
