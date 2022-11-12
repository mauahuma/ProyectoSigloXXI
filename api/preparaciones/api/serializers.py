from rest_framework.serializers import ModelSerializer

from preparaciones.models import Preparacion, Carrito

Carrito


class PreparacionSerializer(ModelSerializer):

    class Meta:
        model = Preparacion
        fields = '__all__'

        #['id', 'nombre', 'stock_critico', 'stock_actual']


class CarritoSerializer(ModelSerializer):

    class Meta:
        model = Carrito
        fields = '__all__'
