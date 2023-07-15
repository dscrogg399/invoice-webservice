import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../exceptions/http.exception";
import { InvoiceOptionService } from "../../services/invoiceOptions.service";

export class InvoiceOptionController {
  public invoiceOptionService = new InvoiceOptionService();

  /**
   * This method gets all invoice option objects OR those with a given category ID and serves them as an ejs view
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
      res.render("invoiceOptionsCategory", {
        invoiceOptions,
        categoryId: invoiceOptions.length > 0 ? categoryId : undefined,
      });
    } catch (error: any) {
      next(new HttpException(500, error.message));
    }
  };

  /**
   * This method gets all invoice option objects OR those with a given invoice type code and serves them as an ejs view
   */
  public getInvoiceOptionsByInvoiceTypeCode = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const typeCode = req.params.typeCode
        ? Number(req.params.typeCode)
        : undefined;
      const invoiceOptions =
        this.invoiceOptionService.searchByInvoiceTypeCode(typeCode);
      res.render("invoiceOptionsType", {
        invoiceOptions,
        typeCode: invoiceOptions.length > 0 ? typeCode : undefined,
      });
    } catch (error: any) {
      next(new HttpException(500, error.message));
    }
  };
}
