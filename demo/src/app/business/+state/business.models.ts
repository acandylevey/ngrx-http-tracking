/**
 * Interface for the 'Business' data
 */
export interface BusinessEntity {
  API: string; // Primary ID
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface BusinessApiResponse {
  count: number;
  entries: BusinessEntity[];
}
