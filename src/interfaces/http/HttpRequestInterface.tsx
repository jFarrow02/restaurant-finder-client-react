import { HttpHeadersInterface } from './HttpHeadersInterface';
import { HttpMethod } from '../../enums';

export interface HttpRequestInterface {
    headers: HttpHeadersInterface,
    method: HttpMethod,
    url: string,
    body: Array<object>|object,
    params?: Map<string, string>
}