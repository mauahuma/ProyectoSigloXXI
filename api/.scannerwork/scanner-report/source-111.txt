from django.contrib import admin
from reservas.models import reservas


@admin.register(reservas)
class ReservasAdmin(admin.ModelAdmin):
    pass
# Register your models here.
