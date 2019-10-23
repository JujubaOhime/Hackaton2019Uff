from rest_framework import serializers
from app.models import User, Relacionado

class UserSerializer(serializers.HyperlinkedModelSerializer):
    relacionados = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'url', 'email', 'nome', 'relacionados']

class RelacionadoSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=False, queryset=User.objects.all())

    class Meta:
        model = Relacionado
        fields = ['id', 'url', 'detalhe', 'user']