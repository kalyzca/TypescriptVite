interface Charapter{
    name: string;
    hp: number,
    showHp: ()=> void;
}


const healCharapter = (charapter: Charapter, amount: number) => {
    charapter.hp+= amount;
}

const strider: Charapter = {
    name:"Strider",
    hp:50,
    showHp () {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharapter(strider,10);
healCharapter(strider,50);
healCharapter(strider,40);

strider.showHp();

export {};