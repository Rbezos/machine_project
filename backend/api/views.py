from rest_framework import viewsets
from .models import Menu, Machines
from .serializer import MenuSerializer, MachinesSerializer

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer 

class MachinesViewSet(viewsets.ModelViewSet):
    queryset = Machines.objects.all()
    serializer_class = MachinesSerializer 