from rest_framework.routers import DefaultRouter

from preparaciones.api.views import PreparacionApiViewSet,IngredientesPreparacionApiViewSet

router_preparacion = DefaultRouter()

router_preparacion.register(
    prefix='preparaciones', basename='preparaciones', viewset=PreparacionApiViewSet
)

router_preparacion.register(
    prefix='ingredientepreparacion', basename='ingredientepreparacion', viewset=IngredientesPreparacionApiViewSet
)
