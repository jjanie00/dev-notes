const promise = new Promise(
    // 비동기 작업을 실행하는 함수 (executor)
    (resolve, reject) => {
    setTimeout(() => {
        console.log('안녕');
        resolve('성공'); // promise fullfilled
        // reject('실패'); // promise rejected
    }, 1000)
    }
); 

setTimeout(() => {
    console.log(promise); 
}, 2000)


// resolve : Promise 를 fullfilled 상태로 바꾸는 함수
// reject : Promise 를 rejected 상태로 바꾸는 함수