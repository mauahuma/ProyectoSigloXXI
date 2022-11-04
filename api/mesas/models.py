from email.policy import default
from django.db import models

# Create your models here.


class Mesa (models.Model):
    numero_mesa = models.IntegerField(unique=True)
    estado = models.CharField(max_length=100, default="Disponible")

    def __str__(self):
        return str(self.numero_mesa)
