import {Calculator} from "../src/calculator";
import {assert, expect, should} from "chai"

describe('calculator' , () => {
    it('debe inicializar cuando el valor esta en cero', () => {
        let calculator = new Calculator();
        expect(calculator.value).to.equal(0);
    })

    it('Se debe actualizar el valor' , () => {
        let calculator = new Calculator();
        expect(calculator.add(5)).to.equal(5);
    })

    it('Segunda forma de evaluar el add ', ()=> {
        let calculator = new Calculator();
        calculator.add(9);
        expect(calculator.value).to.equal(9);
    })

    it('Varias adiciones en el add', ()=>{
        let calculator = new Calculator();
        calculator.add(9);
        calculator.add(2);
        expect(calculator.add(1)).to.equal(12);
    })

    it('Evalua el tipo de dato', () => {
        let calculator = new Calculator();
        calculator.add(9);
        assert.typeOf(calculator.value, 'number')
    })

    it('probando textos', () => {
        let calculator = new Calculator();
        calculator.description = "pr";
        calculator.addText("pr");
        assert.lengthOf(calculator.description, 4);
    })

 
})