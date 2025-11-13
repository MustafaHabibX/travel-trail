# Travel Trail

Track the countries you’ve visited with **Travel Trail**, a full-stack web application built with **Node.js**, **Express**, **EJS**, and **Prisma**, backed by a **PostgreSQL database**.

<p align="center">
  <img src="./assets/banner.webp" alt="Travel Trail Banner" width="800"/>
</p>

<br>

---

## Tech Stack

- **Backend:** Node.js, Express
- **Templating:** EJS
- **Styling:** CSS
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Environment Management:** dotenv
- **Middleware:** body-parser, express.static

<br>

---

## Features

- Add your visited countries and track your travels.
- View all countries that you visited with an awesome UI.
- Dynamic rendering of country data using **EJS templates**.
- Fully connected backend using **Prisma ORM** for database operations.
- Responsive, clean UI with modern styling.
- Seed script to populate all countries.

<br>

---

## Requirements

- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js)
- **PostgreSQL** installed locally
- Modern web browser (Chrome, Firefox, Edge, etc.)

> **Important:** Make sure your PostgreSQL database is running.
> **Create a database named `traveltrail_db` before proceeding.**
> Also, The application requires Prisma to be set up and the database seeded.

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/MustafaHabibX/travel-trail.git
```

2. **Navigate to the project folder**

```bash
cd travel-trail
```

3. **Install dependencies**

```bash
npm install
```

4. **Create the PostgreSQL database**

```bash
createdb traveltrail_db
```

Or in psql shell:

```sql
CREATE DATABASE traveltrail_db;
```

5. **Configure environment variables**

- Create a `.env` file in the project root:

```bash
cp .env.example .env
```

- Update `.env` with your database URL:

```
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/traveltrail_db"
PORT=3000
```

6. **Initialize Prisma and the database**

```bash
npx prisma migrate dev --name init
npx prisma generate
```

7. **Seed the database with countries**

```bash
node prisma/seed.js
```

8. **Start the development server**

```bash
npm run dev
```

9. **Open your browser at**

```
http://localhost:3000
```

---

## Project Structure

```
travel-trail/
│
├─ prisma/           # Database schema and seed scripts
├─ public/           # Static assets (CSS, JS, images, favicon)
│  ├─ styles/
│  ├─ images/
│  └─ favicon.ico
├─ views/            # EJS templates        # Express route files
├─ index.js         # Main server entry
├─ package.json
├─ .env.example      # Example environment variables
├─ .env             # Your local environment variables (ignored by git)
└─ README.md
```

---

## How to Use

1. Open the app in your browser at `http://localhost:3000`.
2. In the input box, type the country you want to add and click the 'Add' button.
3. You will see the **Country** you added is now highlighted.
4. All updates are saved in the PostgreSQL database via Prisma.

<br>

---

## Learning Outcomes

- Hands-on experience with **Node.js** and **Express** backend development.
- Learned to use **EJS templates** for dynamic frontend rendering.
- Implemented **PostgreSQL database integration** using **Prisma ORM**.
- Created seed scripts to populate the database automatically.
- Built **responsive frontend UI** with CSS.
- Developed full-stack workflow skills, from database setup to server and frontend integration.

---

## Notes

- Ensure **both the database and server are running** for the app to function properly.
- Clear browser cache if changes to favicon or assets do not immediately appear.
- The seed script can be re-run at any time to reset the country data.
- `.env` file is ignored by git; use `.env.example` as a template for your local environment variables.
