# Generated by Django 4.0.5 on 2022-06-19 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freelance', '0002_remove_order_customer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='phone',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='user',
        ),
        migrations.RemoveField(
            model_name='executor',
            name='phone',
        ),
        migrations.RemoveField(
            model_name='executor',
            name='user',
        ),
        migrations.RemoveField(
            model_name='service',
            name='executor',
        ),
        migrations.AddField(
            model_name='customer',
            name='description',
            field=models.TextField(default='description'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customer',
            name='email',
            field=models.EmailField(default='mail@mail.com', max_length=254),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customer',
            name='is_executor',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customer',
            name='name',
            field=models.CharField(default='name', max_length=15),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customer',
            name='password',
            field=models.CharField(default='strong_password', max_length=18),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customer',
            name='second_name',
            field=models.CharField(default='second_name', max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='executor',
            name='description',
            field=models.TextField(default='description'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='executor',
            name='email',
            field=models.EmailField(default='mail@mail.com', max_length=254),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='executor',
            name='is_executor',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='executor',
            name='name',
            field=models.CharField(default='name', max_length=15),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='executor',
            name='password',
            field=models.CharField(default='strong_password', max_length=18),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='executor',
            name='second_name',
            field=models.CharField(default='second_name', max_length=20),
            preserve_default=False,
        ),
    ]
