from rest_framework.viewsets import ModelViewSet
from django.db.models import Max, Sum
from finanzas.models import Pago, Finanzas
from finanzas.api.serializers import PagoSerializer, FinanzasSerializer, PagoGroupSerializer
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend


class PagoApiViewSet(ModelViewSet):
    serializer_class = PagoSerializer
    queryset = Pago.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['mesa', 'estadoPago']
    ordering_fields = '__all__'


class PagoGroupedApiViewSet(ModelViewSet):
    serializer_class = PagoGroupSerializer

    queryset = Pago.objects.values('estadoPago').annotate(
        total_Pago=Sum('total_Pago'))


class FinanzasApiViewSet(ModelViewSet):
    serializer_class = FinanzasSerializer
    queryset = Finanzas.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = {'tipo': ['exact'], 'fecha': [
        'gte', 'lte', 'gt', 'lt', 'exact']}
    ordering_fields = '__all__'
