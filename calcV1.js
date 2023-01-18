// old calculator functionality

export default class CalcV1 {
    operation(n1 , n2, opType) {
        if(opType === "multiply") {
            return n1 * n2;
        } else if(opType === "addition") {
            return n1 + n2;
        } else if (opType === "division") {
            return n1 / n2;
        } else if (opType === "substract") {
            return n1 - n2;
        } else {
            return NaN;
        }
    }
}

const clac = new CalcV1();

console.log(clac.operation(2, 4, "addition"))