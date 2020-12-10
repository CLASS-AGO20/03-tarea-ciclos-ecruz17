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

}
let app = new App();

console.log(app.sumatoriaSerieUno(6));

console.log(app.sumatoriaSerieDos(6));