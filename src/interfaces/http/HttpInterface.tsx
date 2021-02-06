import {
    HttpRequestInterface,
    HttpResponse,
} from '../../interfaces';

export interface HttpInterface {
    
    get(req: HttpRequestInterface): Promise<HttpResponse>,
    post(req: HttpRequestInterface): Promise<HttpResponse>,
    put(req: HttpRequestInterface): Promise<HttpResponse>,
    delete(req: HttpRequestInterface): Promise<HttpResponse>,
}