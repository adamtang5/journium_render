# drop and reload db
npx dotenv sequelize-cli db:drop
npx dotenv sequelize-cli db:create
npx dotenv sequelize-cli db:migrate
npx dotenv sequelize-cli db:seed:all

# finish story reducer for full CRUD

# newStory in reducer
# POST /api/stories in API route
# /new-story form page
