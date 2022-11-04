from django.contrib import admin
from pedidos.models import pedidos
# Register your models here.

@admin.register(pedidos)
class PedidoAdmin(admin.ModelAdmin):
    pass