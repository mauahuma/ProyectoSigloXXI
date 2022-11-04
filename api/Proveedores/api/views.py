from rest_framework.viewsets import ModelViewSet

from Proveedores.models import Proveedor
from Proveedores.api.serializers import ProveedorSerializer


class ProveedorApiViewSet(ModelViewSet):
    serializer_class = ProveedorSerializer
    queryset = Proveedor.objects.all()
