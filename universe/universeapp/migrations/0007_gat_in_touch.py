# Generated by Django 3.2 on 2022-03-27 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('universeapp', '0006_project'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gat_in_Touch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('phone', models.IntegerField(max_length=11)),
                ('email', models.EmailField(max_length=254)),
                ('address', models.CharField(max_length=150)),
                ('message', models.TextField()),
            ],
        ),
    ]
