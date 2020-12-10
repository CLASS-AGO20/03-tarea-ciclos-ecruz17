export default class App {

    sumatoriaSerieUno(numero) {

        let total = 0;

        for(let i = 1; i <= numero; i++) {
            total = total + (1/i);
        }

        return total;
    }

}

let app = new App();

console.log(app.sumatoriaSerieUno(7))