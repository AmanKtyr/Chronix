# Generated by Django 5.1.4 on 2024-12-25 06:12

import home.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_product_watch_for_alter_product_watch_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=home.models.product_image_path),
        ),
        migrations.AlterField(
            model_name='product',
            name='watch_for',
            field=models.CharField(choices=[('men', 'Men Watch'), ('women', 'Women Watch'), ('kids', 'Kids Watch'), ('unisex', 'Unisex Watch')], default='unisex', max_length=50),
        ),
        migrations.AlterField(
            model_name='product',
            name='watch_type',
            field=models.CharField(choices=[('analog', 'Analog Watch'), ('digital', 'Digital Watch'), ('smart', 'Smart Watch')], max_length=50),
        ),
    ]