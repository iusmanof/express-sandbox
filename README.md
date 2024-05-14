# express-sandbox
https://blog.francescociulla.com/javascript-crud-rest-api-using-nodejs-express-sequelize-postgres-docker-and-docker-compose\

npm i

docker-compose up







gcloud artifacts repositories create nodeappimagerepo --repository-format=docker --location=europe-west1 --description="Docker repo"

gcloud builds submit --region=europe-west1 --tag europe-west1-docker.pkg.dev/nodeappimage/nodeappimagerepo/node-app-image-gcloud:tag1

gcloud run deploy --image=europe-west1-docker.pkg.dev/nodeappimage/nodeappimagerepo/node-app-image-gcloud:tag1