# Generated by Django 4.1.1 on 2022-11-29 01:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('preparaciones', '0002_preparacion_categoria'),
    ]

    operations = [
        migrations.AddField(
            model_name='preparacion',
            name='Valor_preparacion',
            field=models.IntegerField(default=0),
        ),
    ]
