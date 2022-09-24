from rest_framework.serializers import ModelSerializer

from preparaciones.models import Preparacion,IngredientesPreparacion


class PreparacionSerializer(ModelSerializer):

    class Meta:
        model = Preparacion
        fields = '__all__'
        
        #['id', 'nombre', 'stock_critico', 'stock_actual']

class IngredientesPreparacionSerializer(ModelSerializer):

    class Meta:
        model = IngredientesPreparacion
        fields = '__all__'
        #['id', 'nombre', 'stock_critico', 'stock_actual']
