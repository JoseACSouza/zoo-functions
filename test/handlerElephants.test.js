const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se handlerElephants é do tipo função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Se um parâmetro vazio for passado, deve-se retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Se for passado um parâmetro que não corresponde à uma função, deverá retornar null', () => {
    expect(handlerElephants('qualquer coisa')).toBe(null);
  });
  it('Se um parâmetro de um tipo que não seja string passar, deverá ser retornado um aviso', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants({})).toBe(expected);
    expect(handlerElephants(3)).toBe(expected);
  });
  it('Se um parâmetro count, do tipo string for passado, deverá retornar a quantidade correta de elefantes, no tipo number', () => {
    expect(typeof handlerElephants('count')).toBe('number');
    expect(handlerElephants('count')).toBe(4);
  });
  it('Se um parâmetro names, do tipo string for passado, deverá retornar um array com a relação dos nomes de todos os elefantes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(Array.isArray(handlerElephants('names'))).toBe(true);
    expect(handlerElephants('names')).toEqual(expected);
  });
  it('Se um parâmetro names, do tipo string for passado, deverá retornar um número correspondente a média de idade dos elefantes', () => {
    expect(typeof handlerElephants('averageAge')).toBe('number');
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Se um parâmetro names, do tipo string for passado, deverá retornar uma string com a localização dos elefantes dentro do Zoológico', () => {
    expect(typeof handlerElephants('location')).toBe('string');
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Se um parâmetro names, do tipo string for passado, deverá retornar uma string com a popularidade dos elefantes', () => {
    expect(typeof handlerElephants('popularity')).toBe('number');
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Se um parâmetro names, do tipo string for passado, deverá retornar um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(Array.isArray(handlerElephants('availability'))).toBe(true);
    expect((handlerElephants('availability'))).not.toContain('Monday');
    expect(handlerElephants('availability')).toEqual(expected);
  });
});
