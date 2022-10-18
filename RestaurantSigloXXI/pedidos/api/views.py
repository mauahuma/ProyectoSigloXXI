from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from pedidos.models import pedidos
from pedidos.api.serializers import PedidoSerializer


class PedidoApiViewSet(ModelViewSet):
    serializer_class = PedidoSerializer
    queryset = pedidos.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['Mesa', 'estado', 'pago', 'close']
    ordering_field = '__all__'
