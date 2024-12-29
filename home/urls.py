from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Home page
    path('home/', views.home, name='home'),  # Home page
    path('shop/', views.shop, name='shop' ),
    path('contact/', views.contact, name='contact' ),
    path('About/', views.About, name='About' ),
    path('cart/', views.cart, name='cart' ),
    path('shop_now/', views.shop_now, name='shop_now' )
]

