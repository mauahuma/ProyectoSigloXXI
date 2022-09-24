from rest_framework.viewsets import ModelViewSet

from pedidos.models import pedidos
from pedidos.api.serializers import PedidoSerializer

class PedidoApiViewSet(ModelViewSet):
    serializer_class = PedidoSerializer
    queryset = pedidos.objects.all()
