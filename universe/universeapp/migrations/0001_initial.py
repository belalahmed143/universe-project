# Generated by Django 3.2 on 2022-03-25 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Top_Slider',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title_h1', models.CharField(max_length=150)),
                ('title_h3', models.CharField(max_length=150)),
                ('image', models.ImageField(upload_to='')),
            ],
            options={
                'verbose_name': 'Top Slider',
                'verbose_name_plural': 'Top Sliders',
            },
        ),
    ]
