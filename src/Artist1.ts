export abstract class Artist {
    costume: string;
    makeup: string;
    name: string;

    constructor(costume: string, makeup: string, name: string) {

        this.costume = costume;
        this.makeup = makeup;
        this.name = name;
    }

    getName() {
        return this.name
    }

}