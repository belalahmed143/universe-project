from django import template
from universeapp.models import *
from django.contrib.auth.models import User
register = template.Library()

@register.filter
def project(request):
    project = Project.objects.all()
    return project