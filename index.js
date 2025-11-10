import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Get all visited countries
async function checkVisited() {
  const rows = await prisma.visitedCountry.findMany({
    select: { countryCode: true },
  });
  return rows.map((r) => r.countryCode);
}

// Home route
app.get("/", async (req, res) => {
  const visitedCountries = await checkVisited();
  res.render("index.ejs", {
    countries: visitedCountries,
    total: visitedCountries.length,
  });
});

// Add a visited country
app.post("/add", async (req, res) => {
  const userInput = req.body["country"];

  if (!userInput || !userInput.trim()) {
    const countries = await checkVisited();
    return res.render("index.ejs", {
      countries,
      total: countries.length,
      error: "Empty user input, please enter a country name",
    });
  }

  const normalizedInput = userInput.trim().toLowerCase();

  try {
    // Replicates your old PostgreSQL LIKE '%input%' behavior
    const country = await prisma.country.findFirst({
      where: {
        countryName: {
          contains: normalizedInput,
          mode: "insensitive",
        },
      },
    });

    if (!country) {
      const countries = await checkVisited();
      return res.render("index.ejs", {
        countries,
        total: countries.length,
        error:
          "Please enter a valid country name, country name does not exist!",
      });
    }

    try {
      await prisma.visitedCountry.create({
        data: { countryCode: country.countryCode },
      });
      res.redirect("/");
    } catch (error) {
      const countries = await checkVisited();
      return res.render("index.ejs", {
        countries,
        total: countries.length,
        error: "Entered country name is duplicate, country is already added",
      });
    }
  } catch (error) {
    const countries = await checkVisited();
    return res.render("index.ejs", {
      countries,
      total: countries.length,
      error: "An unexpected error occurred",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
