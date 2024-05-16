test("returns undefined by default", () => {
    const mock = jest.fn();

    let result = mock("bar");
    let result2 = mock("foo");
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith("foo");
});