import XLSX from "xlsx";
import path from "path";
import { InvoiceOption } from "../interfaces/invoiceOption.interface";

/**
 * This function reads the 'DataSet.xlsx' file located in the project directory,
 * extracts the data from the first sheet of the workbook,
 * and converts it into a JSON object that matches the InvoiceOption interface.
 * This is used to simulate a DB table.
 *
 * @returns {InvoiceOption[]} An array of invoice options from the DataSet.xlsx file.
 */
export function getInvoiceOptionData(): InvoiceOption[] {
  // Read the dataset from the xlsx file located in the project directory
  const workbook = XLSX.readFile(path.join(__dirname, "../DataSet.xlsx"));
  const sheetName = workbook.SheetNames[0]; // Only read the first sheet
  const jsonData: InvoiceOption[] = XLSX.utils.sheet_to_json(
    workbook.Sheets[sheetName]
  );
  return jsonData;
}
