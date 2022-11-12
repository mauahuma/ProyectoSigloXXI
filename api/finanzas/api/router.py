from rest_framework.routers import DefaultRouter

from finanzas.api.views import PagoApiViewSet, FinanzasApiViewSet, PagoGroupedApiViewSet

router_pago = DefaultRouter()

router_pago.register(
    prefix='pagos', basename='pagos', viewset=PagoApiViewSet
)


router_pago.register(
    prefix='finanzas', basename='finanzas', viewset=FinanzasApiViewSet
)
router_pago.register(
    prefix='pagosGrouped', basename='pagosGrouped', viewset=PagoGroupedApiViewSet
)
