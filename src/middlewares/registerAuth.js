module.exports = (req, res, next) => {
	req.cookies.username ? next() : res.redirect('/register'); // Remember install cookie parser for example: `npm install cookie-parser --save`
};
