export interface InvoiceOption {
  MessageId: string;
  CorrelationId: string;
  SoftwareVersionNumber: string;
  StatusCode: string;
  ResultCode: number;
  "ns4:AcknowledgementCode": number;
  "ns4:AcknowledgementMessage": string;
  "ns4:TransactionID": string;
  "ns4:Servicer": number;
  "ns4:Company": string;
  "ns4:LoanNumber": string;
  "ns4:BillingEntity": string;
  "ns4:BillingCode": number;
  "ns4:BillingDateTime": string;
  "ns5:ContactInformation": string | null;
  "ns5:CorrelationID": string | null;
  "ns3:CategoryDescription": string;
  "ns3:CategoryID": number;
  "ns3:InvoiceTypeCode": number;
  "ns3:InvoiceTypeDescription": string;
  "ns3:SubCategoryDescription": string;
  "ns3:SubCategoryID": number;
}

export interface InvoiceOptionResponse {
  InvoiceTypeCode: number;
  InvoiceTypeDescription: string;
  CategoryID: number;
  CategoryDescription: string;
  SubCategoryID: number;
  SubCategoryDescription: string;
}
