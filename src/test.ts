import convert from "convert";
describe('test convert package', () => {
  it('Project example', () => {
    const result = convert(1, 'miles').to('km');
    expect(result).toEqual(1.609344);
  });
});
