module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be positive: l = " + x + ", and b = " + y),
            null),
            2000);
    } else {
        setTimeout(() => 
            // first param is ERROR
            callback(null,
            {
                // javascript objects, which are fns,
                // passes as return value of callback fn
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            }),
            2000);    }
}








