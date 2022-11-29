from django.contrib import admin
from bodega.models import Producto 
# Register your models here.

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    pass