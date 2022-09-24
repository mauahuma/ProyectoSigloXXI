from rest_framework.serializers import ModelSerializer

from bodega.models import Producto


class ProductSerializer(ModelSerializer):

    class Meta:
        model = Producto
        fields = ['id', 'nombre', 'stock_critico', 'stock_actual']
