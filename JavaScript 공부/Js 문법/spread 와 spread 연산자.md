# spread 

- 이전의 객체, 혹은 배열의 값을 그대로 가져옴

- 연산자는 ...이다.

- <pre>
        const kingjames = {
        name:'Lebron',
        age: 42,
        color:'red',
        num: 23
        };
        const Cleveland = {
        ...kingjames,
        arena: 'quickenloans arena'
        };
        console.log ( Cleveland);
    </pre>


# rest

- rest 는 spread 와는 다르게 나머지 모든 값을 추출한다.

- 객체 , 배열, 함수의 파라미터에서 사용 가능합니다.

- 객체와 배열에서 쓰는 법은 spread 와 유사하다.

- 파라미터에서 쓰는 법:
    <pre>
        function hello (...rest){
        return rest.reduce((acc,curr)=>acc+curr,0);
        };

        console.log(hello(1,2,3,4,5,6,7,8));</pre>
