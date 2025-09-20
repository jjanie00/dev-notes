console.log(1); 

// 비동기 작업들은 Web APIs 에서 실행
// 콜백 함수를 함께 넘김
// Web APIS : 웹 브라우저의 별도의 영역
setTimeout(() => {
    console.log(2); 
}, 1000);

console.log(3); 