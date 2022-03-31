# create users table

# User
npx sequelize-cli model:generate \
    --name User \
    --attributes username:string,email:string,hashedPassword:string

# add constraints to migration file

# run migration
npx dotenv sequelize db:migrate

# add validation and association to model file
