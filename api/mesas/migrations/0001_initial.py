# Generated by Django 4.1.1 on 2022-11-07 00:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Mesa",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("numero_mesa", models.IntegerField(unique=True)),
                ("estado", models.CharField(default="Disponible", max_length=100)),
            ],
        ),
    ]
