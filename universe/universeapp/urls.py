from django.urls import path
from .views import *

urlpatterns = [
    path("", home, name="home"),
    path('service/', ServiceListView.as_view(), name='service'),
    path('service/<slug>', ServiceDetailView.as_view(), name='service-detail'),
    path('project/', ProjectListView.as_view(), name='project'),
    path('project/<slug>', ProjectDetailView.as_view(), name='project-detail'),
]
