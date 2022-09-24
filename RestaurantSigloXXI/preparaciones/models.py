from django.db import models

# Create your models here.

class Preparacion(models.Model):
    nombre = models.CharField(max_length=100)
    stock = models.IntegerField(default=0)
    activo = models.BooleanField()

    def __str__(self):
        return self.nombre

class IngredientesPreparacion(models.Model):
    Preparacion = models.ForeignKey('preparaciones.Preparacion', on_delete=models.SET_NULL, null=True, blank =True)
    ingrediente = models.ForeignKey('bodega.Producto', on_delete=models.SET_NULL, null=True, blank =True)
    cantidad_ingrediente = models.IntegerField()
    
    def __str__(self):
        return self.Preparacion +' ' + self. ingrediente