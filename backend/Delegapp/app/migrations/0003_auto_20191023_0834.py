# Generated by Django 2.2.6 on 2019-10-23 08:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_act_in_describe_describe_record_employee'),
    ]

    operations = [
        migrations.AlterField(
            model_name='relacionado',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='relacionados', to='app.User'),
        ),
        migrations.CreateModel(
            name='is_reported',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='employee_r', to='app.Employee')),
                ('problem', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='problem_r', to='app.Report')),
            ],
        ),
    ]