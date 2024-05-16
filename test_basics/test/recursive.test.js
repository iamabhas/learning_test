a=[1,1,2,3,4,5]
b=[0,1,2,3,4,5]

test('adding positive numbers is not zero', () => {
    for (let i = 0; i <= a.length; i++) {
        expect(a[i]+b[i]).not.toBe(0)
    }
});