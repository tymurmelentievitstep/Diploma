from rest_framework import generics, permissions

from freelance.models import *
from .serializers import *

from drf_spectacular.utils import extend_schema


# @extend_schema(tags=["Executor"])
class IsExecutor(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


@extend_schema(tags=["Executor"])
class ExecutorRetrieveView(generics.RetrieveAPIView):
    queryset = Executor.objects.all()
    serializer_class = ExecutorSerializer


@extend_schema(tags=["Executor"])
class ExecutorCreateView(generics.CreateAPIView):
    queryset = Executor.objects.all()
    serializer_class = ExecutorSerializer


@extend_schema(tags=["Executor"])
class ExecutorListView(generics.ListAPIView):
    queryset = Executor.objects.all()
    serializer_class = ExecutorSerializer


@extend_schema(tags=["Executor"])
class ExecutorUpdateView(generics.UpdateAPIView):
    queryset = Executor.objects.all()
    serializer_class = ExecutorSerializer


@extend_schema(tags=["Customer"])
class CustomerRetrieveView(generics.RetrieveAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


@extend_schema(tags=["Customer"])
class CustomerUpdateView(generics.UpdateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_class = permissions.IsAuthenticatedOrReadOnly


@extend_schema(tags=["Customer"])
class CustomerCreateView(generics.CreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


@extend_schema(tags=["Customer"])
class CustomerListView(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


@extend_schema(tags=["Order"])
class OrderRetrieveView(generics.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


@extend_schema(tags=["Order"])
class OrderUpdateView(generics.UpdateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_class = permissions.IsAuthenticatedOrReadOnly


@extend_schema(tags=["Order"])
class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_class = permissions.IsAuthenticatedOrReadOnly


@extend_schema(tags=["Order"])
class OrderListView(generics.ListAPIView):
    serializer_class = OrderSerializer

    def get_queryset(self):
        queryset = Order.objects.all()

        params = self.request.query_params

        service_type = params.get("service", None)
        price = params.get("price", None)
        customer = params.get("customer", None)

        if service_type:
            queryset = queryset.filter(service_type=service_type)

        if price:
            queryset = queryset.filter(price__lte=price)

        if customer:
            queryset = queryset.filter(customer__id=customer)

        return queryset


@extend_schema(tags=["Service"])
class ServiceRetrieveView(generics.RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


@extend_schema(tags=["Service"])
class ServiceUpdateView(generics.UpdateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_class = permissions.IsAuthenticatedOrReadOnly


@extend_schema(tags=["Service"])
class ServiceCreateView(generics.CreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_class = permissions.IsAuthenticatedOrReadOnly


@extend_schema(tags=["Service"])
class ServiceListView(generics.ListAPIView):
    serializer_class = ServiceSerializer

    def get_queryset(self):
        queryset = Service.objects.all()

        params = self.request.query_params

        service_type = params.get("service", None)
        price = params.get("price", None)
        executor = params.get("executor", None)

        if service_type:
            queryset = queryset.filter(service_type=service_type)

        if price:
            queryset = queryset.filter(price__lte=price)

        if executor:
            queryset = queryset.filter(executor__id=executor)

        return queryset


@extend_schema(tags=["Review"])
class ReviewRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_class = permissions.IsAuthenticatedOrReadOnly


@extend_schema(tags=["Review"])
class ReviewCreateView(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_class = permissions.IsAuthenticatedOrReadOnly


@extend_schema(tags=["Review"])
class ReviewListView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
