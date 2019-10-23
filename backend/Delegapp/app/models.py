from django.db import models

# Create your models here.
class User(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=20)
    nome = models.CharField(max_length=128)


class Relacionado(models.Model):
    user = models.ForeignKey(User, related_name="relacionados", on_delete=models.CASCADE)
    detalhe = models.CharField(max_length=128)