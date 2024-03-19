# Hotel Booking WebApp

![thumbnail](https://github.com/Hexton09/Cloud_Performance_tuning/assets/98824774/68501708-458a-4943-af6c-bc9c1b8cbaca)
# Prerequisites
* Yarn
* Npm
* Vite
* firebase Project

# Set-up
Go to
````
cd Hotel-Booking-WebApp-main/src/lib
````
Open the file
````
firebase.js
````
And add your Firebase Project Config details

Firebase-> Console -> Project Settings -> General -> Your apps -> Copy the Script and paste it
# To execute locally
Go to
````
cd Hotel-Booking-WebApp-main
````
````
npm install vite
````
````
npm run build
````
````
yarn run dev
````
or
````
npm run dev
````
# To deploy on Azure
* Build and store the docker image of the project in dockerhub
* Go to Azure app service -> Web app
* Select Docker Container
* Give it a name
* Go to Docker
* Select image source as dockerhub
* Add your image and tag
* And Deploy
* Open the link in browser to access it

# Built using

1. React.js
2. Firebase
3. Material UI

