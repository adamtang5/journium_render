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

# write API routes for comments
# GET /api/stories/:id/comments
# POST /api/comments
# PUT /api/comments/:id
# DELETE /api/comments/:id

# Seeder needed to be fixed because of quotes -- lesson: use backticks
npx dotenv sequelize db:drop
npx dotenv sequelize db:create

npx dotenv sequelize db:migrate

npx dotenv sequelize db:seed:all

# write reducer for comments
