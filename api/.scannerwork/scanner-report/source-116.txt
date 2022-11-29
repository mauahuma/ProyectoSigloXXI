from rest_framework.viewsets import ModelViewSet
from reservas.models import reservas
from reservas.api.serializers import ReservasSerializer
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend


class ReservasApiViewset(ModelViewSet):
    serializer_class = ReservasSerializer
    queryset = reservas.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['active', 'fecha']
    ordering_fields = '__all__'
