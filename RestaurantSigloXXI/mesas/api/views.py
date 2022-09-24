from rest_framework.viewsets import ModelViewSet

from mesas.models import Mesa
from mesas.api.serializers import MesaSerializer

class MesaApiViewSet(ModelViewSet):
    serializer_class = MesaSerializer
    queryset = Mesa.objects.all()