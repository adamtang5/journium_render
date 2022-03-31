# create users table

# User
npx sequelize-cli model:generate \
    --name User \
    --attributes username:string,email:string,hashedPassword:string

# add constraints to migration file

# run migration
npx dotenv sequelize db:migrate

# add validation and association to model file

# seed demo user
npx sequelize seed:generate --name demo-user

# fill in seeds in seeder file

npx dotenv sequelize db:seed:all

# define methods for auth in User model file

# define User auth middlewares
mkdir utils
touch utils/auth.js
