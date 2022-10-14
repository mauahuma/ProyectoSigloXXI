from django.contrib import admin
from preparaciones.models import Preparacion
# Register your models here.


@admin.register(Preparacion)
class PreparacionAdmin(admin.ModelAdmin):
    pass
