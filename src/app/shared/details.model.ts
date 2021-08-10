import { Features } from "./features.model";

export class Details {
    public name : string;
    public features : Features;
    public imagePath : string;
    public price : number;
    public description : string;

    constructor(name:string , description:string , imagePath:string , features:Features , price : number ){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.features = features;
        this.price =price;
    }

}