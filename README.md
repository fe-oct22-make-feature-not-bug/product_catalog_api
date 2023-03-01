# Product Catalog API

Welcome to the Product Catalog API, a RESTful API built with Node.js, Express, and Sequelize. This API provides a backend for a product catalog, allowing users to view and manage products in a database.

## Getting started

To get started with the Redmi Product Catalog API, follow these steps:

1. Clone this repository to your local machine using the following command:

```
git clone https://github.com/fe-oct22-make-feature-not-bug/product_catalog.git
```


2. Navigate to the project directory:

```
cd product-catalog-api
```

3. Install the required dependencies using npm:

```
npm i
```

4. Create a new PostgreSQL database and update the `config/config.json` file with your database credentials:

```json
{
 "development": {
   "username": "your-username",
   "password": "your-password",
   "database": "product_catalog_development",
   "host": "localhost",
   "dialect": "postgres"
 }
}
```

5. Run the database migrations to create the necessary tables:

```
npx sequelize-cli db:migrate
```

6. Run seeder to create the necessary record in your database:

```
npx sequelize-cli db:seed:all
```

7. Start the server using the following command:

```
npm run dev
```

The server should be running at http://localhost:3000.
