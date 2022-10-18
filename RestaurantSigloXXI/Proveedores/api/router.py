from rest_framework.routers import DefaultRouter

from Proveedores.api.views import ProveedorApiViewSet

router_proveedor = DefaultRouter()

router_proveedor.register(
    prefix='proveedores', basename='proveedores', viewset=ProveedorApiViewSet
)
