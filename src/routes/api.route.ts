import { Router } from "express";
import { InvoiceOptionController } from "../controllers/api/invoiceOption.controller";
import { Routes } from "../interfaces/routes.interface";

export class ApiRoute implements Routes {
  public path = "/api";
  public router = Router();
  public invoiceOptionController = new InvoiceOptionController();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(
      `${this.path}/category/:categoryId?`,
      this.invoiceOptionController.getInvoiceOptionsByCategoryId
    );

    this.router.get(
      `${this.path}/type/:typeCode?`,
      this.invoiceOptionController.getInvoiceOptionsByInvoiceTypeCode
    );
  }
}
