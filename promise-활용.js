// Promise 생성
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = 10; 
        if(typeof num === 'number'){
            resolve(num + 1); 
        }else{
            reject('숫자가 아닙니다.');
        }
    }, 1000)
})

// Promise 성공
// Promise result 가 인자(value)로 전달됨
promise
    .then((value) => {
        console.log('성공', value); // 성공 11
    })
    .catch((error) => {
        console.log('실패', error);
    })