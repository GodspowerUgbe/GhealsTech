//provides overview of client projects and progress
const months = [
    'january', 'febuary', 'march', 'april',
    'may', 'june', 'july', 'august',
    'september','october','november','december'
];



const dashPage = (req, res) => {
    const date = new Date();
    const month = months[date.getUTCMonth()][0].toUpperCase() + months[date.getUTCMonth()].slice(1);;
    if (!res.locals) res.locals = {};
    res.locals.user = { ...req['user'], projects: req['user'].projects.reverse() };
    res.status(200).render('dashboard',{layout:'client'});
}

module.exports = dashPage;