from django.db import models

# Create your models here.


EstadoEnum = (
    ("PENDIENTE", "pendiente"),
    ("EN PROCESO", "en proceso"),
    ("ENTREGADO","entregado")
)


class pedidos(models.Model):
    Mesa = models.ForeignKey(
        'mesas.Mesa', on_delete=models.SET_NULL, null=True, blank=True)
    preparacion = models.ForeignKey(
        'preparaciones.Preparacion', on_delete=models.SET_NULL, null=True, blank=True
    )
    pago = models.ForeignKey(
        'finanzas.Pago', on_delete=models.CASCADE, null=True, blank=True
    )
    estado = models.CharField(max_length=255, choices=EstadoEnum)
    created_at = models.DateTimeField(auto_now_add=True)
    close = models.BooleanField(default=False)

    def __str__(self):
        return str(self.Mesa)