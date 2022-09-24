from rest_framework.viewsets import ModelViewSet

from bodega.models import Producto
from bodega.api.serializers import ProductSerializer

class ProductoApiViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Producto.objects.all()
