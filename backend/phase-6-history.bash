# Update DB schema on localhost

cp -r backend/db/ backend/bak/

cd backend/

npx dotenv sequelize db:drop
npx dotenv sequelize db:create


# Roles
npx sequelize-cli model:generate \
    --name Role \
    --attributes name:string

# edited migration and model files for Role

npx dotenv sequelize db:migrate

# seed roles
npx sequelize seed:generate --name roles

# fill in seeds in seeder file

npx dotenv sequelize db:seed:all

# Users
npx sequelize-cli model:generate \
    --name User \
    --attributes email:string,hashedPassword:string,displayName:string,avatarUrl:string,roleId:integer

# edited migration and model files for Role

npx dotenv sequelize db:migrate

# seed users
npx sequelize seed:generate --name users

# fill in seeds in seeder file

npx dotenv sequelize db:seed:all

# fixing login and signup form due to db change
