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
//###<-### File - SOBRE.js //###END###//###START### File - MEMORY.js //###->###
/**
*#############################################################################*
*##                                                                         ##*
*##     ~   {                    MEMORY.JS                        }   ~     ##*
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
//  ##  LES CONSTANTES  ##  //
//--!--
//  ##  LA DEFINITION  ##   //
(function () {
//--!--
// -> Les Namespaces (MAJUSCULES et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions (UpperCamelCase et FRANCAIS):
//#region
SOBRE.MEMORY.Convertir = function (bytes, twice = F) {
    if (twice) return (SOBRE.ArrondirDecimales(bytes / 1024 / 1024));
    return (SOBRE.ArrondirDecimales(bytes / 1024));
};
SOBRE.MEMORY.RecupererUtilisationMemoire = function () {
    if (SOBRE.exists(process) && SOBRE.isFunction(process.memoryUsage)) {
        const utilisationMemoire = 100 * SOBRE.MEMORY.Convertir(process.memoryUsage().rss, T);
        return (SOBRE.ArrondirDecimales(utilisationMemoire / SOBRE.MEMORY.max, 1));
    }
    console.warning('Nodejs process object is undefined.');
    return (-1);
};
SOBRE.MEMORY.InterrompreRequete = function (response) {
    if (SOBRE.isFunction(SOBRE.MEMORY.outOfMemory)) { SOBRE.MEMORY.outOfMemory(response); }
};
//#endregion
//--!--
// -> Les Fonctions 'booléennes' (lowerCamelCase et ANGLAIS):
//#region
SOBRE.MEMORY.isSafe = function () {
    const utilisationMemoire = SOBRE.MEMORY.RecupererUtilisationMemoire();
    if (SOBRE.isInteger(SOBRE.MEMORY.limit, T) && utilisationMemoire > -1) { return (SOBRE.MEMORY.limit > utilisationMemoire); }
    return (F);
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
SOBRE.MEMORY.max = 1000;
SOBRE.MEMORY.limit = 99.9;
SOBRE.MEMORY.outOfMemory = N;
//#endregion
//--!--
}());
//--!--
//#!Fin!#
//###<-### File - MEMORY.js //###END###//###START### File - _export.js //###->###
/**
 * Version : 2
 * Revision : 26/01/2021
 * Auteur : Mathaus Leth
 */
//#!Debut!#
//
//--!--
module.exports = {
    SOBRE: SOBRE
};
//--!--
//#!Fin!#
//###<-### File - _export.js //###END###
//##############################################