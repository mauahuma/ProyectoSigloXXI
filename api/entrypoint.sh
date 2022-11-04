#!/bin/sh

pipenv run python manage.py makemigrations
pipenv run python manage.py migrate
pipenv run python manage.py createsuperuser --no-input
pipenv run python manage.py runserver 0.0.0.0:8000