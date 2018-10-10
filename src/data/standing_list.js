const rand = () => {
    return Math.floor(Math.random() * (10 - 7)) + 7;
}
const getRandomMax = (max) => {
    return Math.floor(Math.random() * max);
}

class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.games = rand();
        this.win = getRandomMax(this.games);
        this.lost = getRandomMax((this.games - this.win) + 1);
        this.tie = this.games - (this.win + this.lost);
        this.points = (this.win * 3) + this.tie;
        this.scoreGive = getRandomMax(25);
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getGames() { return this.games; }
    getWin() { return this.win; }
    getLost() { return this.lost; }
    getTie() { return this.tie; }
    getPoints() { return this.points; }
    getScoreGive() { return this.scoreGive; }
    getScoreGet() {
        return this.lost * 2;
    }
    getGoalDiff() {
        return this.scoreGive - this.getScoreGet();
    }

}

const standings = [
    new Team(1, 'NV SJ Sharks'),
    new Team(2, 'NV SJ United'),
    new Team(3, 'NORCAL Rush'),
    new Team(4, 'BELMONT United SC Ajax '),
    new Team(5, 'BELMONT UNITED SC PSV'),
    new Team(6, 'JUVENTUS SC Nero'),
    new Team(7, 'MCS ECFC Evolution'),
    new Team(8, 'PALO ALTO SC Blue'),
    new Team(9, 'WV United'),
    new Team(10, 'FC Alpine Strikes'),
];

export default standings;
