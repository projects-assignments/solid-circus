import { Artist } from "./Artist";

export class Magician extends Artist implements IMagician {
    cape: string;

    constructor(
        costume: string,
        makeup: string,
        name: string,
        cape: string
    ) {
        super(costume, makeup, name);
        this.cape = cape;
    }

    reproduction(): string {
        return "magician"
    }
}
