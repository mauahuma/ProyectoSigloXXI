from email.policy import default
from django.db import models

# Create your models here.


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    proveedor = models.ForeignKey(
        'Proveedores.Proveedor', on_delete=models.CASCADE, null=True, blank=True
    )
    stock_critico = models.IntegerField()
    stock_actual = models.IntegerField()
    medida = models.CharField(max_length=100, default="")
    valor = models.IntegerField(default=0)
    necesita_Stock = models.BooleanField(default=False)

    def __str__(self):
        return self.nombre
