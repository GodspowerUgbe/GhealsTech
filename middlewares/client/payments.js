//provides list of client payments with detail(e.g payment dates,amounts and methods)

const payPage = (req, res) => {
    const data = {
        user: req.user
    }
    res.status(200).render('payment', data);
};