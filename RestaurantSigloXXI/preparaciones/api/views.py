from rest_framework.viewsets import ModelViewSet

from preparaciones.models import Preparacion, IngredientesPreparacion
from preparaciones.api.serializers import PreparacionSerializer, IngredientesPreparacionSerializer

class PreparacionApiViewSet(ModelViewSet):
    serializer_class = PreparacionSerializer
    queryset = Preparacion.objects.all()

class IngredientesPreparacionApiViewSet(ModelViewSet):
    serializer_class = IngredientesPreparacionSerializer
    queryset = IngredientesPreparacion.objects.all()