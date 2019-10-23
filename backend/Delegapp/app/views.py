from app.models import User, Relacionado, Local, Category, Report, ReportRecord, Employee, act_in, describe, describe_record, is_reported
from rest_framework import viewsets
from app.serializers import UserSerializer, RelacionadoSerializer, LocalSerializer, CategorySerializer, ReportSerializer, ReportRecordSerializer, EmployeeSerializer, act_inSerializer, describeSerializer, describe_recordSerializer, is_reportedSerializer


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


class LocalViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Local.objects.all()
    serializer_class = LocalSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ReportViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class ReportRecordViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = ReportRecord.objects.all()
    serializer_class = ReportRecordSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class act_inViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = act_in.objects.all()
    serializer_class = act_inSerializer

class describeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = describe.objects.all()
    serializer_class = describeSerializer

class describe_recordViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = describe_record.objects.all()
    serializer_class = describe_recordSerializer


class is_reportedViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = is_reported.objects.all()
    serializer_class = is_reportedSerializer
