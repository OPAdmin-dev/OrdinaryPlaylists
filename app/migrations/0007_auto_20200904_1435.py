# Generated by Django 3.0.4 on 2020-09-04 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_auto_20200904_1427'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trackimage',
            name='cover',
            field=models.ImageField(default='Track Cover', upload_to='images/'),
        ),
    ]