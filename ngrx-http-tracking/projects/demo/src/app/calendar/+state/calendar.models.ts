/**
 * Interface for the 'Calendar' data
 */
export interface CalendarEntity {
  API: string; // Primary ID
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface CalendarApiResponse {
  count: number;
  entries: CalendarEntity[];
}
