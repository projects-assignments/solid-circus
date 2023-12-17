import { IShow } from './IShow';


export class Show implements IShow {

    constructor(private _hour: number, private _price: number) {

    }
    get hour(): number {
        return this._hour;
    }
    get price(): number {
        return this._price;
    }

    getDetails(): string {
        return `el show de este horario ${this.hour}, tiene este precio ${this.price}`;
    }
}

