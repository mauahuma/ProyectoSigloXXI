from rest_framework.serializers import ModelSerializer

from pedidos.models import pedidos


class PedidoSerializer(ModelSerializer):

    class Meta:
        model = pedidos
        fields ='__all__'