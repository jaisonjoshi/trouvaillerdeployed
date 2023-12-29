export type category = null | "family" | "friends" | "adventure" | "honeymoon";

export type Location = {
    location:string;
}

export type Schedule = {
    dayTitle:string;
    datDesc:string;
}

export type LocationTags = {
    location: string;
    img:string;
}

export type Seo = {
    title:string;
    description:string;
    keywords:string;
}

export type CardTags = {
    cardTag1:string;
    cardTag2:string;
}

export type Activity = {
    title:string;
    description:string;
    img:string;
}

export type Package = {
    _id :string;
    uploaded: boolean;
    title:string;
    titleImage: string;
    description:string;
    shortDescription: string;
    descriptionTitle:string;
    location:string;
    locationTags: LocationTags[];
    duration:string;
    shortDuration:string;
    price:number;
    seo:Seo;
    cardTags:CardTags;
    features:string[];
    activities:Activity[];
    images:string[];
    schedule:Schedule[];
    category:string | null;
}