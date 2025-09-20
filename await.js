async function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('데이터를 가져왔습니다.')
            resolve('성공') 
        }, 1000)
    })
}

async function run(){
    console.log('로딩중...');
    const result = await getData(); 
    console.log(result); 
}

run(); 

// 출력
// 로딩중...
// 데이터를 가져왔습니다.
// 성공