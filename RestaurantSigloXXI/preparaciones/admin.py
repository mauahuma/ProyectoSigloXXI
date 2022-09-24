from django.contrib import admin
from preparaciones.models import Preparacion, IngredientesPreparacion
# Register your models here.

@admin.register(Preparacion)
class PreparacionAdmin(admin.ModelAdmin):
    pass

@admin.register(IngredientesPreparacion)
class IngredientesPreparacionAdmin(admin.ModelAdmin):
    pass