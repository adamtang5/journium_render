# Remaining tables:
    # Likes
    # Follows
    # Tags
    # StoriesTags
    # Lists
    # StoriesLists

# Like model
npx sequelize-cli model:generate \
    --name Like \
    --attributes userId:integer,storyId:integer

# edited migration and model files for Like

npx dotenv sequelize db:migrate

# seed likes
npx sequelize seed:generate --name likes

# fill in seeds in seeder file

npx dotenv sequelize db:seed:all

# API routes for Like
    # GET /api/users/:id/likes
    # GET /api/stories/:id/likes
    # POST /api/likes
    # DELETE /api/likes

# update reducers for stories and users to include like actions

# fixed mistake in associations
npx dotenv sequelize db:drop
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all

# added back associations -- no need to drop/re-create db

# used opportunity to rename db_username and db_name
