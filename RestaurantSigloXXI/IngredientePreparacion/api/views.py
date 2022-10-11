from IngredientePreparacion.models import IngredientesPreparacion
from rest_framework.viewsets import ModelViewSet
from IngredientePreparacion.api.serializer import IngredientesPreparacionSerializer


class IngredientesPreparacionApiViewSet(ModelViewSet):
    serializer_class = IngredientesPreparacionSerializer
    queryset = IngredientesPreparacion.objects.all()
