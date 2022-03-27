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



# spread 를 인자로 



1. 배열을 하나 만든다, 

2. spread를 이용해서 모든값을 함수에 넣어준다.

3. 함수 파라미터에 ...rest를 통해 인자를 배열로 만들어준다


- function max(...rest){               return rest.reduce((acc,curr)=>acc>curr?acc:curr,rest[0])
};

const numbers = [1,2,3,4,10,5,6,7];  console.log(max(...numbers));        