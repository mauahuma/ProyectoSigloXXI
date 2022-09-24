from django.contrib import admin

from finanzas.models import Pago 
# Register your models here.

@admin.register(Pago)
class PagoAdmin(admin.ModelAdmin):
    pass