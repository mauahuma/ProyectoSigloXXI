from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from mesas.models import Mesa
from mesas.api.serializers import MesaSerializer


class MesaApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = MesaSerializer
    queryset = Mesa.objects.all()
