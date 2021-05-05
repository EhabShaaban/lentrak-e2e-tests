export function adaptToReduxPersist(mockValue) {
    // redux-persist converts total value and top-level properties to //string:
    // Es: {a: {foo: 'bar'}} -> {a: JSON.stringify({foo: 'bar'})} -> //JSON.stringify({a: JSON.stringify({foo: 'bar'})});
    // so in order for the tests to work properly, we need to simulate //this behavior
    const partialConversion = Object.keys(mockValue).reduce((acc, key) => {
        acc[key] = JSON.stringify(mockValue[key]);
        return acc;
    }, {});
    return JSON.stringify(partialConversion);
}