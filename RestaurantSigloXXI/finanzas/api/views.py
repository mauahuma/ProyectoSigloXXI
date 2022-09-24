from rest_framework.viewsets import ModelViewSet

from finanzas.models import Pago
from finanzas.api.serializers import PagoSerializer

class PagoApiViewSet(ModelViewSet):
    serializer_class = PagoSerializer
    queryset = Pago.objects.all()
