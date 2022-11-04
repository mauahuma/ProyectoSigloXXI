from rest_framework.routers import DefaultRouter

from bodega.api.views import ProductoApiViewSet

router_product = DefaultRouter()

router_product.register(
    prefix='productos', basename='productos', viewset=ProductoApiViewSet
)
