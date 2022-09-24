from rest_framework.serializers import ModelSerializer

from finanzas.models import Pago


class PagoSerializer(ModelSerializer):

    class Meta:
        model = Pago
        fields = '__all__'
