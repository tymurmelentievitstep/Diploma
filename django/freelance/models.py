from django.db import models
from django.contrib.auth import get_user_model
from freelance.constants import SERVICE_TYPES, ORDER_TYPES, RATING_FILLED


User = get_user_model()


class Customer(models.Model):

    name = models.CharField(max_length=15)
    second_name = models.CharField(max_length=20)
    description = models.TextField()
    is_executor = models.BooleanField(default=False)

    def __str__(self):
        return "User mail: {}".format(self.email)


class Executor(models.Model):

    name = models.CharField(max_length=15)
    second_name = models.CharField(max_length=20)
    description = models.TextField()
    is_executor = models.BooleanField(default=True)

    def __str__(self):
        return "User mail: {}".format(self.email)


class Service(models.Model):

    # executor = models.ForeignKey(Executor, on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
    desc = models.CharField(max_length=1000)
    price = models.IntegerField()
    service_type = models.CharField(choices=SERVICE_TYPES, max_length=1)

    def __str__(self):
        return "{}, {}, price: {}".format(self.name, self.service_type, self.price)


class Order(models.Model):

    # customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
    desc = models.CharField(max_length=1000)
    price = models.IntegerField()
    order_type = models.CharField(choices=ORDER_TYPES, max_length=1)

    def __str__(self):
        return "{}, {}, price: {}".format(self.name, self.order_type, self.price)


class Review(models.Model):

    rating = models.CharField(choices=RATING_FILLED, default="1", max_length=1)
    desc = models.CharField(max_length=1000)
