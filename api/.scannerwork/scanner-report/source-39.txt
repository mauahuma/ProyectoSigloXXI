from IngredientePreparacion.models import IngredientesPreparacion
from rest_framework.viewsets import ModelViewSet
from IngredientePreparacion.api.serializer import IngredientesPreparacionSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter


class IngredientesPreparacionApiViewSet(ModelViewSet):
    serializer_class = IngredientesPreparacionSerializer
    queryset = IngredientesPreparacion.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['Preparacion']
    ordering_field = '__all__'
