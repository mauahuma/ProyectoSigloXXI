from rest_framework.viewsets import ModelViewSet

from finanzas.models import Pago, Finanzas
from finanzas.api.serializers import PagoSerializer, FinanzasSerializer
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend


class PagoApiViewSet(ModelViewSet):
    serializer_class = PagoSerializer
    queryset = Pago.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['mesa', 'estadoPago']
    ordering_fields = '__all__'


class FinanzasApiViewSet(ModelViewSet):
    serializer_class = FinanzasSerializer
    queryset = Finanzas.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['tipo', 'fecha']
    ordering_fields = '__all__'
