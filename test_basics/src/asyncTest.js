function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async Hello');
        }, 5000);
    });
}
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Async Error');
        }, 5000);
    });
}


module.exports = {fetchData,fetchDataWithError};