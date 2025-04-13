const page500 = (err, req, res, next) => {
    console.log(`An error occured`);
    console.error(err)
    res.status(500).render('500');
};

module.exports = page500;