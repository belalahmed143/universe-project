from django import forms
from .models import Gat_in_Touch

class Gat_in_Touch_Form(forms.ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={
        'class':'form-control',
        'placeholder':'Your Name',
    }))
    phone = forms.CharField(widget=forms.TextInput(attrs={
        'class':'form-control',
        'placeholder':'Your Phone',
    }))

    email = forms.EmailField(widget=forms.TextInput(attrs={
        'class':'form-control',
        'placeholder':'Your Email Address',
    }))

    address = forms.CharField(widget=forms.TextInput(attrs={
        'class':'form-control',
        'placeholder':'Your Message',
        'rows': 4
    }))
    
    message = forms.CharField(widget=forms.Textarea(attrs={
        'class':'form-control',
        'placeholder':'Your Phone',
    }))
    
    class Meta:
        model = Gat_in_Touch
        fields = '__all__'