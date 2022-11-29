from django.db import models

# Create your models here.


EstadoEnum = (
    ("PENDIENTE", "pendiente"),
    ("PREPARANDO", "preparando"),
    ("PREPARADO", "preparado"),
    ("ENTREGADO", "entregado")
)


class pedidos(models.Model):
    Mesa = models.ForeignKey(
        'mesas.Mesa', on_delete=models.SET_NULL, null=True, blank=True)
    preparacion = models.ForeignKey(
        'preparaciones.Preparacion', on_delete=models.CASCADE, null=True, blank=True
    )
    pago = models.ForeignKey(
        'finanzas.Pago', on_delete=models.CASCADE, null=True, blank=True
    )
    estado = models.CharField(max_length=255, choices=EstadoEnum)
    created_at = models.DateTimeField(auto_now_add=True)
    close = models.BooleanField(default=False)

    def __str__(self):
        return str(self.Mesa)


class pedidosProveedores(models.Model):
    idProducto = models.ForeignKey(
        'bodega.Producto', on_delete=models.SET_NULL, null=True, blank=True)
    idProveedor = models.ForeignKey(
        'Proveedores.Proveedor', on_delete=models.SET_NULL, null=True, blank=True)
    cantidadSolicitada = models.IntegerField()
    cantidadRecibida = models.IntegerField(null=True)
    valorSolicitado = models.IntegerField()
    valorRecibido = models.IntegerField(null=True)
    activo = models.BooleanField(default=True)
    fechaRecepcion = models.DateField(null=True)
