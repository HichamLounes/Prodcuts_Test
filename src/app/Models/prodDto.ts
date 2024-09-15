export class ProductDto {
    id: number
    name: string
    description: string;
    price: number;
    category: CatMar;
    marque: CatMar;
    image: string;
    promo? : boolean;
    constructor(productDto?) {
        productDto = productDto || {};
        this.id = productDto.id;
        this.name = productDto.name;
        this.description = productDto.description;
        this.price = productDto.price;
        this.category = productDto.category;
        this.marque = productDto.marque;
        this.image = productDto.image;
        this.promo = productDto.promo;
    }
}

export interface CatMar {
    id: number
    name: string
}