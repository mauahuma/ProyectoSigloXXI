from django.db import models


class reservas(models.Model):
    nombre = models.CharField(max_length=255)
    correo = models.CharField(max_length=255)
    comensales = models.IntegerField()
    fecha = models.DateField()
    hora = models.TimeField()
    active = models.BooleanField()


def __str__(self):
    return self.nombre+" "+str(self.fecha)


# Create your models here.
