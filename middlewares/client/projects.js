//provides list of client projects with details(e.g project names,descriptions,statuses)

const projPage = (req, res) => {
    res.locals.user = req.user 
    res.status(200).render('projects',{layout:'client'});
};

module.exports = projPage;