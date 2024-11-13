from django.db import models

# Create your models here.

class Menu (models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    order = models.IntegerField()
    svg = models.TextField()