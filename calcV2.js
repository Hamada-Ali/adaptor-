// new calculator functionality

export default class CalcV2 {
    add(n1, n2) {
        return n1 + n2;
    }

    substract(n1, n2) {
        return n1 - n2;
    }

    division(n1, n2) {
        return n1 / n2;
    }
    multiply(n1, n2) {
        return n1 * n2;
    }
}

const calc = new CalcV2();
