# Generated by Django 3.2 on 2022-03-27 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('universeapp', '0007_gat_in_touch'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gat_in_touch',
            name='phone',
            field=models.CharField(max_length=15),
        ),
    ]
