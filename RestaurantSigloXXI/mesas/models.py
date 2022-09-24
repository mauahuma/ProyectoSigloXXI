from django.db import models

# Create your models here.


class Mesa (models.Model):
    numero_mesa = models.IntegerField()
    
    def __str__(self):
        return str(self.numero_mesa)