from django.shortcuts import render, get_object_or_404

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
def cart(request):
   return render(request, 'home/cart.html')


# def shop_now(request):
#    return render(request, 'home/shop_now.html')


def shop_now(request):
    product_id = request.GET.get('product_id')
    product = get_object_or_404(Product, id=product_id)
    return render(request, 'home/shop_now.html', {'product': product})
