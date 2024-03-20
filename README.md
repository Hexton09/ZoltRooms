# Hotel Booking WebApp

![thumbnail](https://github.com/Hexton09/Cloud_Performance_tuning/assets/98824774/68501708-458a-4943-af6c-bc9c1b8cbaca)
# Prerequisites
* Yarn
* Npm
* Vite
* Firebase Project
# Application Architecture
![image](https://github.com/Hexton09/BookStay/assets/98824774/f2f995e8-4706-4e6a-9c6e-39944ea26e9a)

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

Firebase-> Console -> Project Settings -> General -> Your apps -> Copy the Script and paste it inside the config file
# To execute locally
Go to
````
cd Hotel-Booking-WebApp-main
````
````
npm install
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
# To Deploy on AWS
* Create an EC2 instance (Ubuntu).
* Connect to the instance using the method of your choice.
* Install all the pre-requsites (Node,vite etc)
* Clone the repo into the instance.
* Go inside the Project Directory
* And npm build
* And then run using npm or vite
````
sudo vite --host 0.0.0.0 --port 80
````
* Open the public ip of the instance to see the application running
* If you want you can attach various other services on top to it
# To deploy on vercel
* Simply upload the project using github to vercel and it will deploy it but make sure to select the directory where package.json is present
# Here's what i used for deployment
![image](https://github.com/Hexton09/BookStay/assets/98824774/2244ee2a-bcac-48dc-9bcf-8670c3a8970c)

# Built using

1. React.js
2. Firebase
3. Material UI

