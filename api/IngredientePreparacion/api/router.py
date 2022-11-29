from rest_framework.routers import DefaultRouter
from IngredientePreparacion.api.views import IngredientesPreparacionApiViewSet

ingrediente_router = DefaultRouter()

ingrediente_router.register(
    prefix='ingredientespreparacion', basename='ingredientespreparacion', viewset=IngredientesPreparacionApiViewSet,
)
