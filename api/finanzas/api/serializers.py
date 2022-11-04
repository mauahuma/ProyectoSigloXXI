from rest_framework.serializers import ModelSerializer

from finanzas.models import Pago, Finanzas
from mesas.api.serializers import MesaSerializer


class PagoSerializer(ModelSerializer):
    mesa_data = MesaSerializer(source='mesa', read_only=True)

    class Meta:
        model = Pago
        fields = '__all__'


class FinanzasSerializer(ModelSerializer):

    class Meta:
        model = Finanzas
        fields = '__all__'
