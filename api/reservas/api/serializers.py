from rest_framework.serializers import ModelSerializer
from reservas.models import reservas


class ReservasSerializer(ModelSerializer):
    class Meta:
        model = reservas
        fields = '__all__'
