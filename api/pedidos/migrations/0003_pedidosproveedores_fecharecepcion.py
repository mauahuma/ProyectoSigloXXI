# Generated by Django 4.1.1 on 2022-11-28 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pedidos', '0002_pedidosproveedores'),
    ]

    operations = [
        migrations.AddField(
            model_name='pedidosproveedores',
            name='fechaRecepcion',
            field=models.DateField(null=True),
        ),
    ]