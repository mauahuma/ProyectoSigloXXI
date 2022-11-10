from django.db import models

# Create your models here.
TipoPagoEnum = (
    ("TARJETA", "tarjeta"),
    ("EFECTIVO", "efectivo")
)

EstadoPagoEnum = (
    ("PENDIENTE", "pendiente"),
    ("PAGADO", "pagado")
)
TipoFinanzas = (
    ("INGRESO", "ingreso"),
    ("EGRESO", "egreso")
)


class Pago(models.Model):
    mesa = models.ForeignKey(
        'mesas.Mesa', on_delete=models.SET_NULL, null=True)
    total_Pago = models.IntegerField()
    tipoPago = models.CharField(max_length=255, choices=TipoPagoEnum)
    estadoPago = models.CharField(max_length=255, choices=EstadoPagoEnum)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.mesa)


class Finanzas(models.Model):
    tipo = models.CharField(max_length=255, choices=TipoFinanzas)
    monto = models.IntegerField()
    fecha = models.DateTimeField(auto_now_add=True)
    detalle = models.CharField(max_length=255, null=True, default="")
