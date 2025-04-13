//provides client profile info(e.g contact details,address,phone number)

const profPage = (req, res) => {
    const data = {
        user: req.user
    };
    res.status(200).render('profile',data);
}

module.exports = profPage;