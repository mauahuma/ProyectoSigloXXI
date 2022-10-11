from rest_framework.serializers import ModelSerializer
from IngredientePreparacion.models import IngredientesPreparacion


class IngredientesPreparacionSerializer(ModelSerializer):

    class Meta:
        model = IngredientesPreparacion
        fields = '__all__'
        #['id', 'nombre', 'stock_critico', 'stock_actual']
