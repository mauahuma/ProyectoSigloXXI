from rest_framework.routers import DefaultRouter

from pedidos.api.views import PedidoApiViewSet

router_pedido = DefaultRouter()

router_pedido.register(
    prefix='pedidos', basename='pedidos', viewset=PedidoApiViewSet
)
