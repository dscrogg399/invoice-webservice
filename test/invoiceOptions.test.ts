import request from "supertest";
import { InvoiceOptionResponse } from "../src/interfaces/invoiceOption.interface";
import server from "../src/server";
import { JSDOM } from "jsdom";

describe("GET /api/category", () => {
  it("should get all invoice options", async () => {
    const res = await request(server.app).get("/api/category");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).not.toBe(0);
  });
});

describe("GET /api/category/1", () => {
  it("should get all invoice options with a category id of 1", async () => {
    const res = await request(server.app).get("/api/category/1");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).not.toBe(0);
    // Check that all items have a CategoryID of 1
    expect(
      res.body.every((item: InvoiceOptionResponse) => item.CategoryID === 1)
    ).toBe(true);
  });
});

describe("GET /api/category/999", () => {
  it("should get an empty array", async () => {
    const res = await request(server.app).get("/api/category/999");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });
});

describe("GET /api/type", () => {
  it("should get all invoice options", async () => {
    const res = await request(server.app).get("/api/type");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).not.toBe(0);
  });
});

describe("GET /api/type/807", () => {
  it("should get all invoice options with a type code of 807", async () => {
    const res = await request(server.app).get("/api/type/807");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).not.toBe(0);
    // Check that all items have a InvoiceTypeCode of 807
    expect(
      res.body.every(
        (item: InvoiceOptionResponse) => item.InvoiceTypeCode === 807
      )
    ).toBe(true);
  });
});

describe("GET /api/type/1", () => {
  it("should get an empty array", async () => {
    const res = await request(server.app).get("/api/type/1");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });
});

describe("GET /category", () => {
  it("should get a page with all invoice options", async () => {
    const res = await request(server.app).get("/category");
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toContain("text/html");

    const { window } = new JSDOM(res.text);
    const document = window.document;
    const pageTitle = document?.querySelector("title")?.textContent;
    expect(pageTitle).toBe("Invoice Options");

    const h1Text = document?.querySelector("h1")?.textContent;
    expect(h1Text).toContain("All Categories");
  });
});

describe("GET /category/1", () => {
  it("should get a page with all invoice options with a category id of 1", async () => {
    const res = await request(server.app).get("/category/1");
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toContain("text/html");

    const { window } = new JSDOM(res.text);
    const document = window.document;
    const pageTitle = document?.querySelector("title")?.textContent;
    expect(pageTitle).toBe("Invoice Options");

    const h1Text = document?.querySelector("h1")?.textContent;
    expect(h1Text).toContain("Category:");

    const invoiceOptions = document?.querySelectorAll(".invoice-option");
    expect(invoiceOptions).not.toBeNull(); // Ensure invoiceOptions is not null

    // Check that every .invoice-option contains "Line Item Code: 1" somewhere within it
    invoiceOptions?.forEach((option) => {
      expect(option.textContent).toContain("Line Item Code: 1");
    });
  });
});

describe("GET /category/999", () => {
  it("should get a page with no invoice options", async () => {
    const res = await request(server.app).get("/category/999");
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toContain("text/html");

    const { window } = new JSDOM(res.text);
    const document = window.document;
    const pageTitle = document?.querySelector("title")?.textContent;
    expect(pageTitle).toBe("Invoice Options");

    const h1Text = document?.querySelector("h3")?.textContent;
    expect(h1Text).toContain("No results found.");
  });
});

describe("GET /type", () => {
  it("should get a page with all invoice options", async () => {
    const res = await request(server.app).get("/type");
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toContain("text/html");

    const { window } = new JSDOM(res.text);
    const document = window.document;
    const pageTitle = document?.querySelector("title")?.textContent;
    expect(pageTitle).toBe("Invoice Options");

    const h1Text = document?.querySelector("h1")?.textContent;
    expect(h1Text).toContain("All Types");
  });
});

describe("GET /type/807", () => {
  it("should get a page with all invoice options with a type code of 807", async () => {
    const res = await request(server.app).get("/type/807");
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toContain("text/html");

    const { window } = new JSDOM(res.text);
    const document = window.document;
    const pageTitle = document?.querySelector("title")?.textContent;
    expect(pageTitle).toBe("Invoice Options");

    const h1Text = document?.querySelector("h1")?.textContent;
    expect(h1Text).toContain("Type:");

    const invoiceOptions = document?.querySelectorAll(".invoice-option");
    expect(invoiceOptions).not.toBeNull(); // Ensure invoiceOptions is not null

    // Check that every .invoice-option contains "807" somewhere within it
    invoiceOptions?.forEach((option) => {
      expect(option.textContent).toContain("807");
    });
  });
});

describe("GET /type/1", () => {
  it("should get a page with no invoice options", async () => {
    const res = await request(server.app).get("/type/1");
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toContain("text/html");

    const { window } = new JSDOM(res.text);
    const document = window.document;
    const pageTitle = document?.querySelector("title")?.textContent;
    expect(pageTitle).toBe("Invoice Options");

    const h1Text = document?.querySelector("h3")?.textContent;
    expect(h1Text).toContain("No results found.");
  });
});
