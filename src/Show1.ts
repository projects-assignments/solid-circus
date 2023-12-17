import { Show } from "./Show";
import { IShow1 } from "./IShow1"

export class Show1 {
    constructor(private Show: Show, private IShow: IShow1) { }

    assignRoom() {
        console.log(`Show1 de este horario ${this.show._hour} asignado a este artista ${this.IShow1.artist}`);
    }
}

// import { Show } from "./Show";

// export class Show1 extends Show implements IShow1 {
//     this.x = string;

// constructor(hour: number,
//     price: number,
//     artist: string) {
//     super(hour, price, artist);
//     this.x = x;
// }
// result(): string {
//     return Show1
// }
// }


