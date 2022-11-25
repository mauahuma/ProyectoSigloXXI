from django.contrib import admin

from finanzas.models import Pago, Finanzas
# Register your models here.


@admin.register(Pago)
class PagoAdmin(admin.ModelAdmin):
    pass


@admin.register(Finanzas)
class PagoAdmin(admin.ModelAdmin):
    pass
