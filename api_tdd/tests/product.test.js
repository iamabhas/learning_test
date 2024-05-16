const mongoose = require("mongoose");
const request = require("supertest");

const productSchema = require("../models/product.model");

const app = require("../app");

require("dotenv").config();

const idToCheck = "6641b562aa5c5f8e999d6820";
let hasTestFailed = false;

const sequentialTest = (name, action) => {
  test(name, async () => {
    if (hasTestFailed) {
      console.warn(`[skipped]: ${name}`);
    } else {
      try {
        await action();
      } catch (error) {
        hasTestFailed = true;
        throw error;
      }
    }
  });
};

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("POST /api/products", () => {
  it("should create a product", async () => {
    const res = await request(app).post("/api/products").send({
      name: "Product 2",
      price: 1009,
      description: "Description 2",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Product 2");
  });
});

describe("GET /api/products", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    console.log(res.body);
  });
});

describe("Check product existence", () => {
  it("should check if the product exists based on the id", async () => {
    const productExists = await productSchema.find({
      _id: idToCheck,
    });
    expect(productExists.length).toBeGreaterThan(0);
  });
});

describe("PUT /api/products/:id", () => {
  it("should update a product", async () => {
    const res = await request(app).patch(`/api/products/${idToCheck}`).send({
      name: "Product 4",
      price: 104,
      description: "Description 4",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.price).toBe(104);
  });
});

describe("DELETE /api/products/:id", () => {
  it("should delete a product", async () => {
    const res = await request(app).delete(`/api/products/${idToCheck}`);
    expect(res.statusCode).toBe(200);
  });
});
