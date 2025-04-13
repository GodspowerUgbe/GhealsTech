const login = (req, res) => {
    let refreshTok = req.cookies.jwt
    const data = `<script>
    var isLoggedIn = ${!!refreshTok};
    </script>`
    res.locals.data = data;
    res.status(200).render('login');
};

module.exports = login;