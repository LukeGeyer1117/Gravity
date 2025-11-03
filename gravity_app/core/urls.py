from django.urls import path

from core.views import pages, api

urlpatterns = [
        path("", pages.index, name="index"),

        ]


