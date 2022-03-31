# Dependencies Setup
npm init -y

npm install bcryptjs cookie-parser cors csurf dotenv express express-async-handler express-validator helmet jsonwebtoken morgan per-env pg@^8.4.1 sequelize@5 sequelize-cli@5
npm install -D dotenv-cli nodemon
# inspect package.json


# Configuration
touch .env

# to generate a random JWT secret
openssl rand -base64 10


# Sequelize Setup
touch db_setup.sql

# config/index.js
mkdir config
touch config/index.js

# touch config/database.js
# mkdir backend/db_setup

touch .sequelizerc
# fill in config

### found typo: fix
# mkdir bak
# cp -r config bak/config
# rm config/database.js
# rm -rf db/
# rm -rf models/
# npx sequelize init
# cp -f bak/config/database.js config/
###

npx sequelize init
# update config/database.js

psql < db_setup.sql

npx dotenv sequelize db:create


# Express Setup
touch app.js

# Routes
touch index.js


# bin/www
mkdir bin
touch bin/www


# Test the server
# add scripts to package.json
