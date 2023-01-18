// adaptor deisng pattern 

// it helps us to make the old functionality adapt(work) with the new way

import CalcV2 from "./calcV2.js";

class CalcAdaptor {
    constructor() {
        this.clac = new CalcV2();
    }
    operation(n1, n2, operation) {
        if(operation === "multiply") {
            return this.clac.multiply(n1, n2)
        } else if (operation === "addition") {
            return this.clac.add(n1, n2)
        } else if (operation === "substract") {
            return  this.clac.substract(n1, n2) 
        } else if (operation === 'division') {
            return this.clac.division(n1, n2)
        } else {
            return NaN
        }
    }
}


const adaptedCalc = new CalcAdaptor();

console.log(adaptedCalc.operation(10, 4, 'substract'))