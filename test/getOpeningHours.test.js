const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se nenhum parâmetro for passado, deve retornar o horário de funcionamento de todos os dias da semana.', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Se os parâmetros Monday e uma hora qualquer for passado, deve retornar uma mensagem informando que o zoo não abre neste dia', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(expected);
  });
  it('Se os parâmetros dia de funcionamento  e um horário válido for passado, deve retornar se o zoo está aberto ou não ', () => {
    const expectClosed = 'The zoo is closed';
    const expectOpen = 'The zoo is open';
    expect(getOpeningHours('Thursday', '11:00-AM')).toEqual(expectOpen);
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(expectOpen);
    expect(getOpeningHours('Wednesday', '07:00-AM')).toEqual(expectClosed);
    expect(getOpeningHours('Saturday', '10:01-PM')).toEqual(expectClosed);
  });
  it('Se os parâmetros Dia inexistente e uma hora qualquer for passado, deve lançar um erro', () => {
    expect(() => getOpeningHours('SomeDay', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('Se os parâmetros dia válido e uma hora inválida for passado, deve lançar um erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-FM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
    expect(() => getOpeningHours('Friday', 'D9:00-AM')).toThrow(/^The hour should represent a number$/);
    expect(() => getOpeningHours('Friday', '09:c0-AM')).toThrow(/^The minutes should represent a number$/);
    expect(() => getOpeningHours('Friday', '13:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
    expect(() => getOpeningHours('Friday', '03:65-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
