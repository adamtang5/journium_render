# 2nd CRUD Feature: Comment

# Comment model
npx sequelize-cli model:generate \
    --name Comment \
    --attributes userId:integer,storyId:integer,content:text

# edited migration and model files for Comment

npx dotenv sequelize db:migrate

# seed comments
npx sequelize seed:generate --name comments

# fill in seeds in seeder file

npx dotenv sequelize db:seed:all

# fixing login and signup form due to db change
