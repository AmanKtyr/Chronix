# Generated by Django 5.1.4 on 2024-12-25 14:49

import home.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_alter_product_watch_for'),
    ]

    operations = [
        migrations.CreateModel(
            name='Featured_Collections',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('watch_decription', models.CharField(max_length=200)),
                ('image', models.ImageField(blank=True, null=True, upload_to=home.models.product_image_path)),
            ],
        ),
    ]