from django.urls import path

from . import views

app_name = 'catalog'
urlpatterns = [
    path('', views.CatalogView.as_view(), name='catalog'),
    path('api/catalog/', views.CatalogApiView.as_view()),
    path('api/catalog/<int:pk>', views.ProductApiView.as_view()),
]
