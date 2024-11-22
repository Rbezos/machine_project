from django.db import models

# Create your models here.

class Menu (models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    order = models.IntegerField()
    svg = models.TextField()

class Machines (models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    location = models.TextField()
    img = models.TextField()
    corx = models.FloatField(default='0')
    cory = models.FloatField(default='0')
