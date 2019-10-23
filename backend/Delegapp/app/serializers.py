from rest_framework import serializers
from app.models import User, Relacionado, Category, Local, Report, ReportRecord, Employee, act_in, describe, describe_record, is_reported

class UserSerializer(serializers.HyperlinkedModelSerializer):
    #relacionados = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'url', 'email', 'nome']

class RelacionadoSerializer(serializers.HyperlinkedModelSerializer):
    #user = serializers.PrimaryKeyRelatedField(read_only=False, queryset=User.objects.all())

    class Meta:
        model = Relacionado
        fields = ['id', 'url', 'detalhe', 'user']



class CategorySerializer(serializers.HyperlinkedModelSerializer):
    #father_category = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Category.objects.all())

    class Meta:
        model = Category
        fields = ['id','name','description']

class LocalSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Local
        fields = ['id', 'name','description']


class ReportSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Report
        fields = ['id', 'date', 'description', 'votes', 'solved']


class ReportRecordSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = ReportRecord
        fields = ['id', 'date', 'description']

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Employee
        fields = ['id', 'url', 'email', 'nome', 'disponibility', 'cellphone', 'cep', 'complement']


class act_inSerializer(serializers.HyperlinkedModelSerializer):
    expertise = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Category.objects.all())
    local = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Local.objects.all())
    employee = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Employee.objects.all())

    class Meta:
        model = act_in
        fields = ['expertise', 'local', 'employee']


class describeSerializer(serializers.HyperlinkedModelSerializer):
    area = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Category.objects.all())
    local = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Local.objects.all())
    report = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Report.objects.all())


    class Meta:
        model = describe
        fields = ['area', 'local', 'report'] 



class describe_recordSerializer(serializers.HyperlinkedModelSerializer):
    area = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Category.objects.all())
    local = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Local.objects.all())
    report_record = serializers.PrimaryKeyRelatedField(read_only=False, queryset=ReportRecord.objects.all())

    class Meta:
        model = describe_record
        fields = ['area', 'local', 'report_record']


class is_reportedSerializer(serializers.HyperlinkedModelSerializer):
    problem = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Report.objects.all())
    employee = serializers.PrimaryKeyRelatedField(read_only=False, queryset=Employee.objects.all())

    class Meta:
        model = is_reported
        fields = ['problem', 'employee']