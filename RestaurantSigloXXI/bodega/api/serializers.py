from rest_framework.serializers import ModelSerializer

from bodega.models import Producto
from Proveedores.api.serializers import ProveedorSerializer


class ProductSerializer(ModelSerializer):
    Proveedor_data = ProveedorSerializer(
        source='proveedor', read_only=True)

    class Meta:
        model = Producto
        fields = ['id', 'nombre', 'stock_critico', 'Proveedor_data',
                  'proveedor', 'stock_actual']
