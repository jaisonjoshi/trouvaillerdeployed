export type category = null | "family" | "friends" | "adventure" | "honeymoon";

export type Location = {
    location:string;
}

export type Schedule = {
    dayTitle:string;
    datDesc:string;
}

export type Package = {
    _id :string;
    title:string;
    description:string;
    location:string;
    locations:string[];
    duration:string;
    cheapestPrice:number;
    features:string[];
    activities:string[];
    offers:boolean;
    offertitle:string;
    offerdescription:string;
    offerprice:string;
    images:string[];
    schedule:Schedule[];
    category:string;
}