# Generated by Django 2.2.6 on 2019-10-23 07:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='app.User')),
                ('disponibility', models.TextField(max_length=1000)),
                ('cellphone', models.CharField(max_length=15)),
                ('cep', models.CharField(max_length=15)),
                ('complement', models.TextField(max_length=400)),
            ],
            bases=('app.user',),
        ),
        migrations.CreateModel(
            name='describe_record',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('area', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='area_r', to='app.Category')),
                ('local', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='local_r', to='app.Local')),
                ('report_record', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='report_record_r', to='app.ReportRecord')),
            ],
        ),
        migrations.CreateModel(
            name='describe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('area', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='area_d', to='app.Category')),
                ('local', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='local_d', to='app.Local')),
                ('report', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='report_d', to='app.Report')),
            ],
        ),
        migrations.CreateModel(
            name='act_in',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='employee_a', to='app.Employee')),
                ('expertise', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='expertise_a', to='app.Category')),
                ('local', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='local_a', to='app.Local')),
            ],
        ),
    ]