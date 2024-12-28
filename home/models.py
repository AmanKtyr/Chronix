from fileinput import filename
from django.db import models
import os

# Define the custom upload path function
def product_image_path(instance, filename):
    return os.path.join('uploaded_images',filename)

class Product(models.Model):
    name = models.CharField(max_length=200)
    
    # Choices for watch type
    WATCH_TYPE = [
        ('Analog ', 'Analog Watch'),
        ('Digital ', 'Digital Watch'),
        ('Smart ', 'Smart Watch'),
    ]
    watch_type = models.CharField(max_length=50, choices=WATCH_TYPE)
    
    # Choices for target audience (watch_for)
    WATCH_FOR_CHOICES = [
        ('Men Watch', 'Men Watch'),
        ('Women Watch', 'Women Watch'),
        ('Kids Watch', 'Kids Watch'),
        ('Unisex Watch', 'Unisex Watch'),
    ]
    watch_for = models.CharField(max_length=50, choices=WATCH_FOR_CHOICES, default='unisex')
    
    price = models.FloatField()
    image = models.ImageField(upload_to=product_image_path, null=True, blank=True)  # Use the correct function
    
    def __str__(self):
        return self.name
    
    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url



def featured_collections_path(instance, filename):
    return os.path.join('uploaded_images', filename)

class FeaturedCollections(models.Model):
    name = models.CharField(max_length=50)
    watch_description = models.CharField(max_length=200)  
    image = models.ImageField(upload_to=featured_collections_path, null=True, blank=True)

    def __str__(self):
        return self.name

