const teams = [
    'NV SJ United',
    'NORCAL Rush',
    'BELMONT United SC Ajax ',
    'BELMONT UNITED SC PSV',
    'JUVENTUS SC Nero',
    'MCS ECFC Evolution',
    'PALO ALTO SC Blue',
    'WV United',
    'FC Alpine Strikes',
];
const HOME_TEAM = 'NV SJ Sharks';
const getVisitor = () => teams[Math.floor(Math.random() * teams.length)];
const getScore = () => Math.floor(Math.random() * 7);

const scores = [
    {
        id: 1,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getScore(),
        lose: getScore()
    },
    {
        id: 2,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getScore(),
        lose: getScore()
    },
    {
        id: 3,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getScore(),
        lose: getScore()
    },
    {
        id: 4,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getScore(),
        lose: getScore()
    },
    {
        id: 5,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getScore(),
        lose: getScore()
    },
    {
        id: 6,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getScore(),
        lose: getScore()
    },
    {
        id: 7,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getScore(),
        lose: getScore()
    },
    {
        id: 8,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getScore(),
        lose: getScore()
    },
    {
        id: 9,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getScore(),
        lose: getScore()
    },
    {
        id: 10,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getScore(),
        lose: getScore()
    },
    {
        id: 11,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getScore(),
        lose: getScore()
    },
    {
        id: 12,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getScore(),
        lose: getScore()
    },
    {
        id: 13,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getScore(),
        lose: getScore()
    },
    {
        id: 14,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getScore(),
        lose: getScore()
    },

];

export default scores;