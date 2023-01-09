const { SOBRE } = require('../SOBRE.js.js');
const octets = 19065; //taille en octet du fichier sobre.js.png
console.log(SOBRE.MEMORY.Convertir(octets)); //18.6ko
console.log(SOBRE.MEMORY.Convertir(octets, true)); //0.02Mo (0.0186Mo = 18.6ko)
console.log(process.memoryUsage().rss, SOBRE.MEMORY.RecupererUtilisationMemoire());
console.log(SOBRE.MEMORY.isSafe());
SOBRE.MEMORY.max = 10; //réduction de la limitation de mémoire
console.log(process.memoryUsage().rss, SOBRE.MEMORY.RecupererUtilisationMemoire());
console.log(SOBRE.MEMORY.isSafe());