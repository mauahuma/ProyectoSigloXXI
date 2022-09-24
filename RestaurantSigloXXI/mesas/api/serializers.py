from rest_framework.serializers import ModelSerializer

from mesas.models import Mesa


class MesaSerializer(ModelSerializer):

    class Meta:
        model = Mesa
        fields = '__all__'