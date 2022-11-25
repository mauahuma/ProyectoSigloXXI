from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from bodega.models import Producto
from bodega.api.serializers import ProductSerializer


class ProductoApiViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Producto.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['proveedor', 'necesita_Stock']
    ordering_field = '__all__'
