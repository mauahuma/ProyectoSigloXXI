from rest_framework.serializers import ModelSerializer

from bodega.models import Producto


class ProductSerializer(ModelSerializer):
    Proveedor_data = ...

    class Meta:
        model = Producto
        fields = ['id', 'nombre', 'stock_critico',
                  'proveedor', 'Proveedor_data', 'stock_actual']
