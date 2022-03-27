from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
import string, random
from django.urls import reverse
# Create your models here.

class Top_Slider(models.Model):
    """Model definition for Top_slider."""
    title_h1 = models.CharField(max_length = 150)
    title_h3 = models.CharField(max_length = 150)
    image = models.ImageField(upload_to='TopSliderImage')
    
    class Meta:
        """Meta definition for Top_slider."""

        verbose_name = 'Top Slider'
        verbose_name_plural = 'Top Sliders'
        ordering =['-id']

    def __str__(self):
        """Unicode representation of Top_slider."""
        return self.title_h3


#Service Model
class Our_Service(models.Model):
    """Model definition for Our_Service."""

    title = models.CharField(max_length = 150)
    slug = models.SlugField(max_length = 50, unique=True, blank=True)
    image = models.ImageField(upload_to='ServiceImage')
    description =RichTextUploadingField()
    
    #randomly slug field ganerate
    def save(self, *args, **kwargs):
        try:
            self.slug =''.join(random.choice(string.ascii_lowercase + string.digits)for _ in range(49))
            super().save(*args, **kwargs)
        except IntegrityError:
            self.save(*args,**kwarg)

    class Meta:
        """Meta definition for Our_Service."""

        verbose_name = 'Our_Service'
        verbose_name_plural = 'Our_Services'
        ordering =['-id']

    def __str__(self):
        """Unicode representation of Our_Service."""
        return self.title

    def get_service_detail_link(self):
        return reverse('service-detail', kwargs={'slug': self.slug})


class Project(models.Model):
    title = models.CharField(max_length = 150)
    slug = models.SlugField(max_length = 50, unique=True, blank=True)
    image = models.ImageField(upload_to='ServiceImage')
    description =RichTextUploadingField()
    
    #randomly slug field ganerate
    def save(self, *args, **kwargs):
        try:
            self.slug =''.join(random.choice(string.ascii_lowercase + string.digits)for _ in range(49))
            super().save(*args, **kwargs)
        except IntegrityError:
            self.save(*args,**kwarg)

    class Meta:
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
        ordering =['-id']

    def __str__(self):
        return self.title

    def get_project_detail_link(self):
        return reverse('project-detail', kwargs={'slug': self.slug})

class Gat_in_Touch(models.Model):
    name = models.CharField(max_length = 150)
    phone = models.CharField(max_length = 15)
    email = models.EmailField()
    address = models.CharField(max_length = 150)
    message = models.TextField()

    def __str__(self):
        return self.email
    
    

    

