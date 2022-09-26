# Generated by Django 4.1.1 on 2022-09-19 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('proveedor', models.CharField(max_length=100)),
                ('stock_critico', models.IntegerField()),
                ('stock_actual', models.IntegerField()),
            ],
        ),
    ]