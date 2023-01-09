//###START### File - SOBRE.js //###->###
/**
*#############################################################################*
*##                                                                         ##*
*##     ~   {                    SOBRE.JS                         }   ~     ##*
*##                                                                         ##*
*#############################################################################*
**/
/**
 * Version : 3
 * Revision : 10/01/2023
 * Auteur : Mathaus Leth
 */
//#!Debut!#
//
//--!--
const SOBRE = {};
//--!--
//  ##  LES CONSTANTES  ##  //
const T = true;
const F = false;
const N = null;
const U = undefined;
const V = '';
//--!--
//  ##  LA DEFINITION  ##   //
(function () {
//--!--
// -> Les Namespaces (MAJUSCULES et ANGLAIS):
//#region
SOBRE.MEMORY = {};
//#endregion
//--!--
// -> Les Fonctions (UpperCamelCase et FRANCAIS):
//#region
SOBRE.ArrondirDecimales = function (number, decimals = 2) {
    var multiplicateur = (decimals === 2) ? 100 : 0;
    if (multiplicateur === 0) {
        multiplicateur = 10;
        for (var i = 1; i < decimals; i++) { multiplicateur *= 10; }
    }
    return (Math.round(number * multiplicateur) / multiplicateur);
};
//#endregion
//--!--
// -> Les Fonctions 'booléennes' (lowerCamelCase et ANGLAIS):
//#region
SOBRE.exists = function (something) {
    return (something !== N && something !== U && something !== 'null' && something !== 'undefined');
};
SOBRE.isFunction = function (something) {
    return (typeof something === 'function');
};
SOBRE.isInteger = function (something, positive = F) {
    const valeur = Number.parseInt(something);
    return ((positive === F) ? Number.isSafeInteger(valeur) : Number.isSafeInteger(valeur) && valeur >= 0);
};
//#endregion
//--!--
// -> Les Fonctions 'this' (UpperCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Objets (MAJUSCULES et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables (minuscules et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables 'require' (minuscules et ANGLAIS):
//#region
//#endregion
//--!--
}());
//--!--
//#!Fin!#
//###<-### File - SOBRE.js //###END###