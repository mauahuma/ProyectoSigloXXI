from rest_framework.serializers import ModelSerializer
from IngredientePreparacion.models import IngredientesPreparacion
from bodega.api.serializers import ProductSerializer


class IngredientesPreparacionSerializer(ModelSerializer):
    product_data = ProductSerializer(source="ingrediente", read_only=True)

    class Meta:
        model = IngredientesPreparacion
        fields = '__all__'
        #['id', 'nombre', 'stock_critico', 'stock_actual']
