/**
 * Interface for the 'Books' data
 */
export interface BooksEntity {
    API: string; // Primary ID
    Description: string;
    Auth: string;
    HTTPS: boolean;
    Cors: string;
    Link: string;
    Category: string;
}

export interface BookApiResponse {
    count: number;
    entries: BooksEntity[];
}
