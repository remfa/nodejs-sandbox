const { traceMethodCalls } = require('./app06-helper1');

function Rectangle(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
}

module.exports = tracedTestRectangle= traceMethodCalls({
    makeaRectangle(haut,larg) {
        return new Rectangle(haut,larg);
    },
    aireOfRectangle(aRectangle) {
        return aRectangle.hauteur * aRectangle.largeur;
    },
    perimetreOfRecangle(aRectangle) {
        return 2*aRectangle.hauteur + 2*aRectangle.largeur;
    },
});
