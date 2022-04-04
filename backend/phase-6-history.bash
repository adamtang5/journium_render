# Update DB schema on localhost

cp -r backend/db/ backend/bak/

cd backend/

npx dotenv sequelize db:drop
npx dotenv sequelize db:create
