"""RestaurantSigloXXI URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from users.api.router import router_user
from bodega.api.router import router_product
from preparaciones.api.router import router_preparacion
from mesas.api.router import router_mesa
from finanzas.api.router import router_pago
from pedidos.api.router import router_pedido
from IngredientePreparacion.api.router import ingrediente_router
from Proveedores.api.router import router_proveedor
from reservas.api.router import router_reservas

schema_view = get_schema_view(
    openapi.Info(
        title="RSXXI - ApiDoc",
        default_version='v1',
        description="Documentación de la api de RSXXI",
        terms_of_service="",
        contact=openapi.Contact(email="ma.ahumadac@duocuc.cl"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('docs/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger-ui'),
    path('redocs/', schema_view.with_ui('redoc',
         cache_timeout=0), name='schema-redoc'),
    path('api/', include(router_user.urls)),
    path('api/', include(router_product.urls)),
    path('api/', include(router_preparacion.urls)),
    path('api/', include(router_mesa.urls)),
    path('api/', include(router_pago.urls)),
    path('api/', include('users.api.router')),
    path('api/', include(router_pedido.urls)),
    path('api/', include(ingrediente_router.urls)),
    path('api/', include(router_proveedor.urls)),
    path('api/', include(router_reservas.urls)),



] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
