import {
  InvoiceOption,
  InvoiceOptionResponse,
} from "../interfaces/invoiceOption.interface";
import { getInvoiceOptionData } from "../utils/data";

export class InvoiceOptionService {
  public invoiceOptions: InvoiceOption[] = getInvoiceOptionData();
  public selectColumns = [
    "ns3:InvoiceTypeCode",
    "ns3:InvoiceTypeDescription",
    "ns3:CategoryID",
    "ns3:CategoryDescription",
    "ns3:SubCategoryID",
    "ns3:SubCategoryDescription",
  ];

  /**
   * This method searches the invoice options by category id.
   * If no category id is provided, it returns all invoice options.
   * @param categoryId - The ID of the category to be searched.
   * @returns An array of invoice options that matches the category id.
   */
  public searchByCategoryId(categoryId?: number): InvoiceOptionResponse[] {
    const filteredData: InvoiceOptionResponse[] = this.invoiceOptions
      .filter((item: InvoiceOption) => {
        if (categoryId) {
          return item["ns3:CategoryID"] === categoryId;
        } else {
          return true;
        }
      })
      .map((item: InvoiceOption) => {
        const filteredItem: any = {};
        this.selectColumns.forEach((column) => {
          // Remove 'ns3:' from the column names and use the cleaned name as the key for the filteredItem
          const cleanedName = column.replace("ns3:", "");
          filteredItem[cleanedName] = item[column as keyof InvoiceOption];
        });
        return filteredItem;
      });
    return filteredData;
  }

  /**
   * This method searches the invoice options by invoice type code.
   * If no invoice type code is provided, it returns all invoice options.
   * @param typeCode - The code of the invoice type to be searched.
   * @returns An array of invoice options that matches the invoice type code.
   */
  public searchByInvoiceTypeCode(typeCode?: number): InvoiceOptionResponse[] {
    const filteredData: InvoiceOptionResponse[] = this.invoiceOptions
      .filter((item: InvoiceOption) => {
        if (typeCode) {
          return item["ns3:InvoiceTypeCode"] === typeCode;
        } else {
          return true;
        }
      })
      .map((item: InvoiceOption) => {
        const filteredItem: any = {};
        this.selectColumns.forEach((column) => {
          // Remove 'ns3:' from the column names and use the cleaned name as the key for the filteredItem
          const cleanedName = column.replace("ns3:", "");
          filteredItem[cleanedName] = item[column as keyof InvoiceOption];
        });
        return filteredItem;
      });
    return filteredData;
  }
}
