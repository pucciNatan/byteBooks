# Generated by Django 5.1.1 on 2024-10-31 14:00

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('livros', '0006_livro_avaliacaogeral_livro_qtdavaliacoes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='livro',
            name='avaliacaoGeral',
            field=models.FloatField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)]),
        ),
    ]
