export default class App {

    sumatoriaSerieUno(numero) {

        let total = 0;

        for(let i = 1; i <= numero; i++) {
            total = total + (1/i);
        }

        return total;
    }

    sumatoriaSerieDos(numero) {

        let total = 1;
        let i = 2;

        while(i <= numero) {

            if(i%2 === 0) {
                total = total + (1/i);
            }
            else {
                total = total - (1/i);
            }
        i++;
        
    }
    return total;
    }

    esPrimo(numero) {
        
        let i = 2;
        do {
            if(numero % i === 0) return false;
            return numero > 1;            
            i++;
        } while (i < numero);
          
    }    

    obtenerMultiplos(inicio, fin) {

        let i = inicio;
        let multiplos = "";
        do {
            
            if(i%3 === 0) {
                multiplos = multiplos + `${i}`;
            }
            i++;
        } while (i <= fin);

        return multiplos;
    }

    obtenerImpares(numero1, numero2) {

        let c;
        let impar = 0;

        if(numero2 > numero1) {
            c = numero1;
            numero1 = numero2;
            numero2 = c;
        }

        for(let i = numero1; i >= numero2; i--) {
            if(i%2 != 0) {
                impar = impar + "," + i;
                impar = impar.toString();
            }
        }

        return impar;
    }

}
let app = new App();

console.log(app.sumatoriaSerieUno(6));

console.log(app.sumatoriaSerieDos(6));

console.log(app.esPrimo(8));

console.log(app.obtenerMultiplos(10,25));

console.log(app.obtenerImpares(10,5));