from django.db import models

# Create your models here.
class User(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=20)
    nome = models.CharField(max_length=128)

class Employee(User):
    disponibility = models.TextField(max_length=1000)
    cellphone = models.CharField(max_length=15)
    cep = models.CharField(max_length=15)
    complement = models.TextField(max_length=400)

class Relacionado(models.Model):
    user = models.ForeignKey(User, related_name="relacionados", on_delete=models.SET_NULL, null=True)
    detalhe = models.CharField(max_length=128)


class Local(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
  
class Report(models.Model):
    date = models.DateTimeField(auto_now=True)
    description = models.TextField(max_length=1000)
    solved = models.BooleanField(default=False)
    votes = models.IntegerField(default=1)

class ReportRecord(models.Model):
    date = models.DateTimeField(auto_now=True)
    description = models.TextField(max_length=1000)

class act_in(models.Model):
    expertise = models.ForeignKey(Category, related_name="expertise_a", on_delete=models.SET_NULL, null=True)
    local = models.ForeignKey(Local, related_name="local_a", on_delete=models.SET_NULL, null=True)
    employee = models.ForeignKey(Employee, related_name="employee_a", on_delete= models.SET_NULL, null=True)

class describe(models.Model):
    area = models.ForeignKey(Category, related_name="area_d", on_delete=models.SET_NULL, null=True)
    local = models.ForeignKey(Local, related_name="local_d", on_delete=models.SET_NULL, null=True)
    report = models.ForeignKey(Report, related_name="report_d", on_delete=models.SET_NULL, null=True)

class describe_record(models.Model):
    area = models.ForeignKey(Category, related_name="area_r", on_delete=models.SET_NULL, null=True)
    local = models.ForeignKey(Local, related_name="local_r", on_delete=models.SET_NULL, null=True)
    report_record = models.ForeignKey(ReportRecord, related_name="report_record_r", on_delete=models.SET_NULL, null=True)
