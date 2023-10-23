import { Poline } from "./poline.class";
import { Vendor } from "./vendor.class";

export class Po {
    vendor?:Vendor;
    polines: Poline[] = [];
    poTotal: number = 0.0;
}