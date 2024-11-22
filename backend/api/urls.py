from django.urls import path,include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'menu', views.MenuViewSet)
router.register(r'machines', views.MachinesViewSet)

urlpatterns = [
    path('', include(router.urls)) 
]