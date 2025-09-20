async function getData(){
    // 객체를 결과값으로 갖는 Promise 반환
    return {
        name : 'haemyeong',
        age : 26
    }
}

// 그래서 getData.then() 에서 출력되는 거
getData().then((data) => {
    console.log(data);
})