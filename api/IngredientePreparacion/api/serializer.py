from rest_framework.serializers import ModelSerializer
from IngredientePreparacion.models import IngredientesPreparacion
from bodega.api.serializers import ProductSerializer
from preparaciones.api.serializers import PreparacionSerializer


class IngredientesPreparacionSerializer(ModelSerializer):
    product_data = ProductSerializer(source="ingrediente", read_only=True)
    preparacion_data = PreparacionSerializer(
        source="Preparacion", read_only=True)

    class Meta:
        model = IngredientesPreparacion
        fields = '__all__'
        #['id', 'nombre', 'stock_critico', 'stock_actual']


class PreparacionCostoSerializer(ModelSerializer):
    product_data = ProductSerializer(source="ingrediente", read_only=True)
    preparacion_data = PreparacionSerializer(
        source="Preparacion", read_only=True)

    class Meta:
        model = IngredientesPreparacion
        fields = ['nombre', 'product_data']
