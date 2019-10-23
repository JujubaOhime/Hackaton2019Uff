from app.models import User, Relacionado
from rest_framework import viewsets
from app.serializers import UserSerializer, RelacionadoSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class RelacionadoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Relacionado.objects.all()
    serializer_class = RelacionadoSerializer