from rest_framework.routers import DefaultRouter
from reservas.api.views import ReservasApiViewset

router_reservas = DefaultRouter()

router_reservas.register(
    prefix='reservas',
    basename='reservas',
    viewset=ReservasApiViewset
)
