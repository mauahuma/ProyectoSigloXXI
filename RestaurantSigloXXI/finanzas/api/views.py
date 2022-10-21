from rest_framework.viewsets import ModelViewSet

from finanzas.models import Pago
from finanzas.api.serializers import PagoSerializer
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend


class PagoApiViewSet(ModelViewSet):
    serializer_class = PagoSerializer
    queryset = Pago.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['mesa', 'estadoPago']
    ordering_fields = '__all__'
