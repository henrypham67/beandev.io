install:
	npm i --legacy-peer-deps

dev:
	gatsby develop

build:
	gatsby build

serve:
	gatsby serve

deploy:
	cd ./public && aws s3 sync ./ s3://beandev.io