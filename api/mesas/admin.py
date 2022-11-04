from django.contrib import admin

from mesas.models import Mesa
# Register your models here.

@admin.register(Mesa)
class MesaAdmin(admin.ModelAdmin):
    pass