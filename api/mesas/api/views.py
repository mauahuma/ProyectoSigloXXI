from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from mesas.models import Mesa
from django_filters import rest_framework as filters
from mesas.api.serializers import MesaSerializer
import django_filters


class ProductFilter(filters.FilterSet):
    negated_field__not = django_filters.CharFilter(
        field_name='estado', exclude=True)

    class Meta:
        model = Mesa
        fields = ['numero_mesa', 'estado']


class MesaApiViewSet(ModelViewSet):

    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = MesaSerializer
    queryset = Mesa.objects.all().order_by('numero_mesa')
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = ProductFilter

    ordering_field = '__all__'
