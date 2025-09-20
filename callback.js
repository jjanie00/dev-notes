// 비동기 함수 안의 결과를 외부에서 사용
// 콜백 함수 이용

function add(a,b,callback){
    const sum = a+b; 
    callback(sum)
}

add(1,2,(value)=> {
    console.log(value); // 3
}); 

// 콜백 지옥을 피하기 위해 Promise 사용
