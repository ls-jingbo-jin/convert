# convert
test convert TypeError

# Reproduce step:
1: `npm install`

2: `npm test`

You will get this issue:
```
TypeError: (0 , convert_1.default) is not a function

      2 | describe('test convert package', () => {
      3 |   it('Project example', () => {
    > 4 |     const result = convert(1, 'miles').to('km');
        |                           ^
      5 |     expect(result).toEqual(1.609344);
      6 |   });
      7 | });

```

Downgrade to 
```
"convert": "4.6.0"
```
can resolve this error. 

