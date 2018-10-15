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
const imgs = [
    '/images/TA.png',
    '/images/TB.png',
    '/images/TC.png',
    '/images/TD.png',
    '/images/TE.png',
    '/images/TF.png',
    '/images/TB.png',
];
const HOME_TEAM = 'NV SJ Sharks';
const getVisitor = () => teams[Math.floor(Math.random() * teams.length)];
const getRandom = () => Math.floor(Math.random() * 7);

const scores = [
    {
        id: 1,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()],
    },
    {
        id: 2,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 3,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 4,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 5,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 6,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 7,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 8,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 9,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 10,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 11,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 12,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 13,
        home: HOME_TEAM,
        visitor: getVisitor(),
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },
    {
        id: 14,
        home: getVisitor(),
        visitor: HOME_TEAM,
        win: getRandom(),
        lose: getRandom(),
        logoUrl: imgs[getRandom()]
    },

];

export default scores;