# Generated by Django 5.1.3 on 2024-12-27 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('livros', '0012_combo_descricaodetalhada_livro_editora_livro_idoma_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='livro',
            name='chamadaDesc',
            field=models.CharField(default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='livro',
            name='descricao',
            field=models.CharField(default='', max_length=1000),
        ),
    ]
