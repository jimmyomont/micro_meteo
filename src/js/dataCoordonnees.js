const xy = [
    {
        city: 'Boulogne Billancourt',
        x: '48.84',
        y: '2.24',
        fuseau : new Intl.DateTimeFormat('fr', { timeStyle: 'long', timeZone: 'Europe/Paris' }).format(new Date())
    },
    {
        city: 'Libye',
        x: '28.00',
        y: '17.00',
        fuseau : new Intl.DateTimeFormat('fr', { timeStyle: 'long', timeZone: 'Africa/Tripoli' }).format(new Date())
    },
    {
        city: 'Antarctique',
        x: '-80.22',
        y: '77.21',
        fuseau : new Intl.DateTimeFormat('fr', { timeStyle: 'long', timeZone: 'Antarctica/McMurdo' }).format(new Date())
    },
    {
        city: 'Vienne',
        x: '48.21',
        y: '16.37',
        fuseau :new Intl.DateTimeFormat('fr', { timeStyle: 'long', timeZone: 'Europe/Vienna' }).format(new Date())
    },
];

export default xy ; 
const now = new Date()
const heure = now.getHours()