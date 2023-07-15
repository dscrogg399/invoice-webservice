import { NextFunction, Request, Response } from "express";
import { InvoiceOptionService } from "../../services/invoiceOptions.service";

export class InvoiceOptionController {
  public invoiceOptionService = new InvoiceOptionService();

  /**
   * This method gets all invoice option objects OR those with a given category ID and serves them as JSON
   */
  public getInvoiceOptionsByCategoryId = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const categoryId = req.params.categoryId
        ? Number(req.params.categoryId)
        : undefined;
      const invoiceOptions =
        this.invoiceOptionService.searchByCategoryId(categoryId);
      res.status(200).json(invoiceOptions);
    } catch (error) {
      next(error);
    }
  };

  /**
   * This method gets all invoice option objects OR those with a given invoice type code and serves them as JSON
   */
  public getInvoiceOptionsByInvoiceTypeCode = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const invoiceOptions = this.invoiceOptionService.searchByInvoiceTypeCode(
        Number(req.params.typeCode)
      );
      res.status(200).json(invoiceOptions);
    } catch (error) {
      next(error);
    }
  };
}
