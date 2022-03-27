from django import template
from universeapp.models import *
from django.contrib.auth.models import User
register = template.Library()

@register.filter
def service(request):
    service = Our_Service.objects.all()
    return service