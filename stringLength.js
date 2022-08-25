const functions = (s) => {
    if (!(s.length >1 && s.length <=10)) {
        return 'Error';
    } else {
        return s.length;
    }
};


module.exports = functions;