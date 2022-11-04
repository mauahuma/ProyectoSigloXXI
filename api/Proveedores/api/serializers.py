from rest_framework.serializers import ModelSerializer

from Proveedores.models import Proveedor


class ProveedorSerializer(ModelSerializer):

    class Meta:
        model = Proveedor
        fields = '__all__'
