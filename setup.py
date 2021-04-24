# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in prms/__init__.py
from prms import __version__ as version

setup(
	name='prms',
	version=version,
	description='Project Record Management System',
	author='bakari',
	author_email='bakari607@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
