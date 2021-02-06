import { AddressInterface } from './AddressInterface';
import { GradeInterface } from './GradeInterface';

export interface RestaurantInterface {
    address: AddressInterface,
    borough: string,
    cuisine: string,
    grades: Array<GradeInterface>,
    name: string,
    restaurant_id: string,
}