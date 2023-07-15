import { Router } from "express";
import { InvoiceOptionController } from "../controllers/web/invoiceOption.controller";
import { Routes } from "../interfaces/routes.interface";

export class WebRoute implements Routes {
  public path = "";
  public router = Router();
  public invoiceOptionController = new InvoiceOptionController();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(
      `/category/:categoryId?`,
      this.invoiceOptionController.getInvoiceOptionsByCategoryId
    );

    this.router.get(
      `/type/:typeCode?`,
      this.invoiceOptionController.getInvoiceOptionsByInvoiceTypeCode
    );
  }
}
