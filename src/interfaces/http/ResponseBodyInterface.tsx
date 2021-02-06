import { HttpErrorInterface } from './HttpErrorInterface';

export interface ResponseBodyInterface {
    status: number,
    body?: Array<object> | object,
    error?: HttpErrorInterface, 
}