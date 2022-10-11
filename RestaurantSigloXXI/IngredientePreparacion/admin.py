from django.contrib import admin
from IngredientePreparacion.models import IngredientesPreparacion

# Register your models here.


@admin.register(IngredientesPreparacion)
class IngredientesPreparacionAdmin(admin.ModelAdmin):
    pass
