from django.db import models

# Create your models here.


class Preparacion(models.Model):
    nombre = models.CharField(max_length=100)
    stock = models.IntegerField(default=0)
    activo = models.BooleanField()
    receta = models.CharField(max_length=255, default="")
    tiempo_preparacion = models.IntegerField(default=0)
    Valor = models.IntegerField(default=0)
    Imagen = models.ImageField(upload_to='preparaciones', null=True)

    def __str__(self):
        return self.nombre
