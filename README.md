# Todo List App - Back-End

---

## API Endpoints

- **GET /tasks**: Fetch all tasks.
- **POST /tasks**: Create a new task.
- **PUT /tasks/:id**: Update an existing task.
- **DELETE /tasks/:id**: Delete a task.

---

## Tech Stack

- **Express.js**: Server framework for handling HTTP requests.
- **Prisma**: ORM for interacting with the MySQL database.
- **MySQL**: Relational database for storing tasks.
- **TypeScript**: Type-safe development.
- **CORS**: Enable cross-origin resource sharing for the front-end.

---

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables** Create a **.env** file in the root of the project and add the following:

   ```bash
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
   ```

   Replace **USER**, **PASSWORD**, and **DATABASE_NAME** with your actual MySQL credentials and database name.

---

## Database Initialization using Prisma

1. **Generate Prisma Client**: Run the following command to generate the Prisma client based on the schema.

   ```bash
   npx prisma generate
   ```

2. **Run Migrations**: Use Prisma migrations to apply the schema to your database.

   ```bash
   npx prisma migrate dev --name init
   ```

---

## Running the Server

1. **Start the Development Server**:

   ```bash
   npm run dev
   ```

2. **View API**: The back-end API will be running on http://localhost:3001.
