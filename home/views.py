from django.shortcuts import render

from .models import *

def home(request):
    # return render(request, 'home/index.html')
    featured_collections = FeaturedCollections.objects.all()  
    return render(request, 'home/index.html', {'FeaturedCollectionss': featured_collections})

def shop(request):
       try:
        # Fetch all products from the database
        products = Product.objects.all()
       except Product.DoesNotExist:
        products = None  # Fallback in case no products are found
    
       return render(request, 'home/shop.html', {'products': products})

def contact(request):
   return render(request, 'home/contact.html')

def About(request):
   return render(request, 'home/About.html')
