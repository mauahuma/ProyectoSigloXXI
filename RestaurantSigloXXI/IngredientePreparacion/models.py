from django.db import models


class IngredientesPreparacion(models.Model):
    Preparacion = models.ForeignKey(
        'preparaciones.Preparacion', on_delete=models.SET_NULL, null=True, blank=True)
    ingrediente = models.ForeignKey(
        'bodega.Producto', on_delete=models.SET_NULL, null=True, blank=True)
    cantidad_ingrediente = models.IntegerField()

    def __str__(self):
        return str(self.id)
