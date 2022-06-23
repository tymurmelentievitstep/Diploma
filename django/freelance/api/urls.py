from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.views import (
    TokenObtainSlidingView,
    TokenRefreshSlidingView,
)

from .views import *

urlpatterns = [
    path("auth/", include("djoser.urls")),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # path("auth/", include("rest_framework_social_oauth2.urls")),
    path("auth/token/", obtain_auth_token, name="token"),
    path("executors/<int:pk>", ExecutorRetrieveView.as_view()),
    path("executors/update/<int:pk>", ExecutorUpdateView.as_view()),
    path("executors/all", ExecutorListView.as_view()),
    path("executors/new", ExecutorCreateView.as_view()),
    path("customers/<int:pk>", CustomerRetrieveView.as_view()),
    path("customers/update/<int:pk>", CustomerUpdateView.as_view()),
    path("customers/all", CustomerListView.as_view()),
    path("customers/new", CustomerCreateView.as_view()),
    path("orders/<int:pk>", OrderRetrieveView.as_view()),
    path("orders/update/<int:pk>", OrderUpdateView.as_view()),
    path("orders/all", OrderListView.as_view()),
    path("orders/new", OrderCreateView.as_view()),
    path("services/<int:pk>", ServiceRetrieveView.as_view()),
    path("services/update/<int:pk>", ServiceUpdateView.as_view()),
    path("services/all", ServiceListView.as_view()),
    path("services/new", ServiceCreateView.as_view()),
    path("reviews/<int:pk>", ReviewRetrieveUpdateView.as_view()),
    path("reviews/update/<int:pk>", ReviewRetrieveUpdateView.as_view()),
    path("reviews/all", ReviewListView.as_view()),
    path("reviews/new", ReviewCreateView.as_view()),
]
