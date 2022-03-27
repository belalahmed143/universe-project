from django.shortcuts import render,redirect
from .models import *
from django.views.generic import DetailView,ListView
from .forms import Gat_in_Touch_Form
from django.contrib import messages
# Create your views here.

def home(request):
    top_slider = Top_Slider.objects.all()
    our_service = Our_Service.objects.all()
    projects = Project.objects.all()
    form = Gat_in_Touch_Form(request.POST)
    
    if request.method == 'POST':
        form = Gat_in_Touch_Form(request.POST)
        if form.is_valid():
            name = form.cleaned_data.get('name')
            phone =form.cleaned_data.get('phone')
            email =form.cleaned_data.get('email')
            address =form.cleaned_data.get('address')
            message =form.cleaned_data.get('message')
            
            submit=Gat_in_Touch(
            name = name,
            phone = phone,
            email = email,
            address = address,
            message =message
            )
            submit.save()
            messages.success(request, 'Successfully Submit')
            return redirect('/')
    context={
        'top_slider':top_slider,
        'our_service':our_service,
        'projects':projects,
        'form':form
    }
    return render(request, 'home.html',context)

class ServiceListView(ListView):
    model = Our_Service
    template_name = "service.html"
    context_object_name ='our_service'

class ServiceDetailView(DetailView):
    model = Our_Service
    template_name ='service_detail.html'

class ProjectListView(ListView):
    model = Project
    template_name = "project.html"
    context_object_name ='projects'

class ProjectDetailView(DetailView):
    model = Project
    template_name ='project_detail.html'