# Generated by Django 4.1.1 on 2022-10-24 07:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mesas', '0002_mesa_estado'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mesa',
            name='numero_mesa',
            field=models.IntegerField(unique=True),
        ),
    ]
