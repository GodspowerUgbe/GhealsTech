const contactForm = async (req, res) => {
    console.log(req.body);
    
    res.redirect('/contact');
}

module.exports = contactForm;