export interface HttpHeadersInterface {
    headers: Map<string, string>, // Key-value pairs representing all headers
    entries?(): Array<string>, // Returns array of all header key-value pairs
    get?(key: string): Array<string>, // Get a header value by its key
    has?(key: string): boolean, // Returns true if header exists, false otherwise
    keys?(): Array<string> // Returns array of all header keys
    set?(key: string, value: string): void // Sets header identified by 'key' to value

}