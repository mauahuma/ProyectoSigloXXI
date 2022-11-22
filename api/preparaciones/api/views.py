from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from preparaciones.models import Preparacion, Carrito
from preparaciones.api.serializers import PreparacionSerializer, CarritoSerializer


class PreparacionApiViewSet(ModelViewSet):
    serializer_class = PreparacionSerializer
    queryset = Preparacion.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = '__all__'
    filterset_fields = ['categoria']


class CarritoApiViewSet(ModelViewSet):
    serializer_class = CarritoSerializer
    queryset = Carrito.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['mesa']
    ordering_fields = '__all__'
