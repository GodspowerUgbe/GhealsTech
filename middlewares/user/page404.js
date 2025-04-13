const page404 = (req,res)=>{
    res.status(404).render('404');
};

module.exports = page404;