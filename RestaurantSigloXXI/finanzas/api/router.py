from rest_framework.routers import DefaultRouter

from finanzas.api.views import PagoApiViewSet

router_pago= DefaultRouter()

router_pago.register(
    prefix='pagos', basename='pagos', viewset=PagoApiViewSet
)