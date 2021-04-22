"""ProjectSaki URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
'''
!!!IMPORTANT FOR YOUR PRIVACY!!!
privacy protecting measure is taken: add an 'secret.py' file ,which is already
included in gitignore, in the base path, and add the following sentence:
admin_addr = <YOUR MASK FOR YOUR DJANGO ADMIN PAGE>
admin_addr = ''.join([admin_addr, '/'])
The string in the angle brackets should be a random one so that your admin page
would not be accessed easily.
'''

from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from . import views
import secret
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    url(r"^$",views.index),
    path(secret.admin_addr, admin.site.urls),
    path('index/',views.index),
    path("old/",views.index_old)
]
