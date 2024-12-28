from django.contrib import admin
# from .models import FeaturedCollections

# Register your models here.
from .models  import *
admin.site.register(Product)

admin.site.register(FeaturedCollections)