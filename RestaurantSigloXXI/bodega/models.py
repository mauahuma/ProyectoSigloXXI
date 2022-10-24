from django.db import models

# Create your models here.


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    proveedor = models.ForeignKey(
        'Proveedores.Proveedor', on_delete=models.SET_NULL, null=True, blank=True
    )
    stock_critico = models.IntegerField()
    stock_actual = models.IntegerField()

    def __str__(self):
        return self.nombre
