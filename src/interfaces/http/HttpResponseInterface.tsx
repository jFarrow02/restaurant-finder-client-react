import { HttpHeadersInterface } from './HttpHeadersInterface';
import { ResponseBodyInterface } from './ResponseBodyInterface';

export interface HttpResponse {
    status: number,
    headers: HttpHeadersInterface,
    ok: boolean,
    body?: ResponseBodyInterface,
}