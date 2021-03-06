# Generated by Django 3.0.4 on 2020-09-04 09:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20200904_0940'),
    ]

    operations = [
        migrations.CreateModel(
            name='TrackImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cover', models.ImageField(default='Track Cover', upload_to='')),
                ('track', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tracks', to='app.Tracks')),
            ],
            options={
                'db_table': 'track_images',
            },
        ),
    ]
