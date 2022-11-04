from django.contrib import admin
from Proveedores.models import Proveedor
# Register your models here.


@admin.register(Proveedor)
class ProveedorAdmin(admin.ModelAdmin):
    pass
