# Mybnb

## What is Mybnb?

Mybnb is an Airbnb inspired project where users can experience a mondern and simplistic twist to the Airbnb application. Users can see all of the locations that are offered, create a new location for guests to see and explore, and leave reviews if the user has been to the location. 

Visit the live site here: https://mybnb-app.herokuapp.com/

## Technologies used

* React.js
* Redux
* SQLAlchemy
* Flask
* Python
* CSS

## How to use the application

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***



## Screenshots of pages

![Screen Shot 2021-12-29 at 10 15 35 AM](https://user-images.githubusercontent.com/81453687/147687151-cc84bdb7-15d1-4f73-b777-d82a85e1bb65.png)

![Screen Shot 2021-12-29 at 10 23 21 AM](https://user-images.githubusercontent.com/81453687/147687180-60fa9230-c9d4-4a3d-bd03-32299cd8beec.png)
