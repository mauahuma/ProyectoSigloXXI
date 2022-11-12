from django.db import models

# Create your models here.


class Preparacion(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    stock = models.IntegerField(default=0)
    activo = models.BooleanField()
    receta = models.CharField(max_length=255, default="")
    tiempo_preparacion = models.IntegerField(default=0)
    Valor = models.IntegerField(default=0)
    Imagen = models.ImageField(upload_to='preparaciones', null=True)

    def __str__(self):
        return self.nombre


class Carrito(models.Model):
    idprep = models.ForeignKey(
        "preparaciones.Preparacion", on_delete=models.SET_NULL, null=True)
    mesa = models.ForeignKey(
        "mesas.Mesa", on_delete=models.SET_NULL, null=True)
