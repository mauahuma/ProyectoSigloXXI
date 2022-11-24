
# Generated by Django 4.1.1 on 2022-11-19 02:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('mesas', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Finanzas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(choices=[('INGRESO', 'ingreso'), ('EGRESO', 'egreso')], max_length=255)),
                ('monto', models.IntegerField()),
                ('fecha', models.DateField(auto_now_add=True)),
                ('detalle', models.CharField(default='', max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Pago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_Pago', models.IntegerField()),
                ('tipoPago', models.CharField(choices=[('TARJETA', 'tarjeta'), ('EFECTIVO', 'efectivo')], max_length=255)),
                ('estadoPago', models.CharField(choices=[('PENDIENTE', 'pendiente'), ('PAGADO', 'pagado')], max_length=255)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('mesa', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='mesas.mesa')),
            ],
        ),
    ]
