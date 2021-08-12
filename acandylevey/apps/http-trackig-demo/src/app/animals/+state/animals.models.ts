/**
 * Interface for the 'Animals' data
 */
export interface AnimalsEntity {
  API: string; // Primary ID
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface AnimalApiResponse {
  count: number;
  entries: AnimalsEntity[];
}
