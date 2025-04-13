//provides list of client projects with details(e.g names,descriptions,statuses)

const invPage = (req, res) => {
    const data = {
        user: req.user
    };
    res.status(200).render('invoice', data);
};

module.exports = invPage;