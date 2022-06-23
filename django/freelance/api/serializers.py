from freelance.models import *
from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:

        model = User
        fields = ["username", "email", "first_name", "last_name"]


class ExecutorSerializer(serializers.ModelSerializer):
    is_executor = serializers.ReadOnlyField(source="Customer.is_executor")

    class Meta:
        model = Executor
        fields = "__all__"


class CustomerSerializer(serializers.ModelSerializer):
    is_executor = serializers.ReadOnlyField(source="Customer.is_executor")

    class Meta:
        model = Customer
        fields = "__all__"


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    # customer = CustomerSerializer()
    # order_type = serializers.CharField(source="get_order_type_display")

    class Meta:
        model = Order
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"
