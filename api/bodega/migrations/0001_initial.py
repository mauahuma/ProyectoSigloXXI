
# Generated by Django 4.1.1 on 2022-11-19 02:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Proveedores', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100, unique=True)),
                ('stock_critico', models.IntegerField()),
                ('stock_actual', models.IntegerField()),
                ('medida', models.CharField(default='', max_length=100)),
                ('valor', models.IntegerField(default=0)),
                ('necesita_Stock', models.BooleanField(default=False)),
                ('proveedor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Proveedores.proveedor')),
            ],
        ),
    ]
