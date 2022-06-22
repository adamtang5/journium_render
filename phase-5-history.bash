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
