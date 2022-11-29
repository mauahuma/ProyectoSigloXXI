from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend, FilterSet
from rest_framework.filters import OrderingFilter
from pedidos.models import pedidos, pedidosProveedores
from pedidos.api.serializers import PedidoSerializer, PedidosProveedoresSerializer
from django_filters import DateTimeFilter


class PedidoApiViewSet(ModelViewSet):

    serializer_class = PedidoSerializer
    queryset = pedidos.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = {'Mesa': ['exact'], 'estado': ['exact'], 'pago': [
        'exact'], 'close': ['exact'], 'created_at': ['gte', 'lte', 'gt', 'lt', 'exact']}
    ordering_field = '__all__'


class PedidosProveedoresViewSet(ModelViewSet):
    serializer_class = PedidosProveedoresSerializer
    queryset = pedidosProveedores.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['idProveedor', 'idProducto', 'activo']
    ordering_field = '__all__'
