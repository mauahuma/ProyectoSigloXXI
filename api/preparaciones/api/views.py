from rest_framework.viewsets import ModelViewSet

from preparaciones.models import Preparacion
from preparaciones.api.serializers import PreparacionSerializer


class PreparacionApiViewSet(ModelViewSet):
    serializer_class = PreparacionSerializer
    queryset = Preparacion.objects.all()
