from rest_framework.serializers import ModelSerializer

from pedidos.models import pedidos
from preparaciones.api.serializers import PreparacionSerializer
from mesas.api.serializers import MesaSerializer


class PedidoSerializer(ModelSerializer):
    preparacion_Data = PreparacionSerializer(
        source='preparacion', read_only=True)
    mesa_Data = MesaSerializer(source='Mesa', read_only=True)

    class Meta:
        model = pedidos
        fields = ['id', 'Mesa', 'mesa_Data', 'preparacion', 'preparacion_Data',
                  'pago', 'estado', 'created_at', 'close']
