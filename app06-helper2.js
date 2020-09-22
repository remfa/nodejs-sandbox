const { traceMethodCalls } = require('./app06-helper1');

function Rectangle(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
}

module.exports = tracedTestRectangle= traceMethodCalls({
    libName:"RectangleLib",
    make(haut,larg) {
        return new Rectangle(haut,larg);
    },
    aire(aRectangle) {
        return aRectangle.hauteur * aRectangle.largeur;
    },
    perimetre(aRectangle) {
        return 2*aRectangle.hauteur + 2*aRectangle.largeur;
    },
});
