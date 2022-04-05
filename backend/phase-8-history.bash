# Story model
npx sequelize-cli model:generate \
    --name Story \
    --attributes title:string,content:text,userId:integer,imageUrl:string,videoUrl:string

# edited migration and model files for Story

npx dotenv sequelize db:migrate

# seed stories
npx sequelize seed:generate --name stories

# fill in seeds in seeder file
