from rest_framework.routers import DefaultRouter

from mesas.api.views import MesaApiViewSet

router_mesa = DefaultRouter()

router_mesa.register(
    prefix='mesas', basename='mesas', viewset=MesaApiViewSet
)
