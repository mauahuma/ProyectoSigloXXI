from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from mesas.models import Mesa
from mesas.api.serializers import MesaSerializer


class MesaApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = MesaSerializer
    queryset = Mesa.objects.all().order_by('numero_mesa')
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['numero_mesa']
    ordering_field = '__all__'
