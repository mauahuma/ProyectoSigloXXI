from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.filters import OrderingFilter
from mesas.models import Mesa
from mesas.api.serializers import MesaSerializer


class MesaApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = MesaSerializer
    queryset = Mesa.objects.all().order_by('numero_mesa')
    filter_backends = [OrderingFilter]
    ordering_field = 'numero_mesa'
