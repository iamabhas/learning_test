const {fetchData,fetchDataWithError} = require('../src/asyncTest');

test('fetchData function should resolve with correct data',()=>{
    expect.assertions(1);
    return expect(fetchData()).resolves.toBe("Async Hello")
})

test('fetchDataWithError rejects with an error message', () => {
    expect.assertions(1);
    return expect(fetchDataWithError()).rejects.toBe('Async Error');
});

test('fetchData correctly and check async/await', async() => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data).toBe("Async Hello");
})