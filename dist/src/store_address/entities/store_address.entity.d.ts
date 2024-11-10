import { BookStore } from "../../book_store/entities/book_store.entity";
import { Region } from "../../region/entities/region.entity";
import { District } from "../../district/entities/district.entity";
export declare class StoreAddress {
    id: number;
    region_id: number;
    district_id: number;
    street: string;
    location: string;
    info: string;
    book_stores: BookStore[];
    region: Region;
    district: District;
}
