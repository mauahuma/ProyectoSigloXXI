from django.contrib import admin
from preparaciones.models import Preparacion, Carrito
# Register your models here.


@admin.register(Preparacion)
class PreparacionAdmin(admin.ModelAdmin):
    pass


@admin.register(Carrito)
class CarritoAdmin(admin.ModelAdmin):
    pass
