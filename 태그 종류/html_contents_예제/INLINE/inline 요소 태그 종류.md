# a 태그 -inline 요소

현재문서에서 다른페이지,같은 페이지 위치(#, 해시태그),파일,이메일 주소 전화번호 등 다른 URL로 연결항 수 있는 하이퍼링크를 설정.

<strong>중요 속성:</strong>

<strong>href</strong> - 링크 URL  / a태그 href=""

<strong>rel</strong> - 현재 문서와 링크의 관계 / license,prev,next ...

<strong>target</strong> - 링크 URL의 표시(브라우저 탭)위치 / _self , _blank

<strong>download</strong> -링크를 누르면 해당파일 다운로드 / download



# abbr 태그 -inline 요소

<mark>약어</mark>를 지정. 보통 title 속성을 사용하여 전체 글자나 설명을 제공.

<strong>예) Using abbr title="HyperText Markup Language" HTML /abbr is fun!</strong>  



# b 태그 -inline 요소

적합한 의미가 아닌경우 사용.
일반적인 글자에 사용.
문체가 다른 글자의 범위를 설정.
(Bring Attention)
1. 특별한 의미를 가지지 않음
2. 읽기 흐름에 도움을 주는 용도로 사용.
3. 글자가 두껍게 나옴.



# mark 태그 -inline 요소

하이라이팅 할 때 사용. 글자 배경이 노란색으로 나옴.



# em 태그 -inline 요소

의미 강조 태그 . emphasis 
- <mark>중첩</mark>이 가능
- 중첩될수록 의미가 강해진다.
- 이탤릭체 글꼴이다.
- 정보통신보조기기 등에서 구두 강조로 발음됨.



# strong 태그 -inline 요소

의미릐 중요성을 나타내기 위해 사용
글자가 두껍게 표시됨.



# i 태그 -inline 요소

적합한 의미가 아닌경우 사용.
아이콘이나 이미지 특수기호 같은 특수글자를 일반글자와 구분하기 위해 사용.



# dfn 태그 -inline 요소

용어를 정리할 때 사용.
보통 id="" 와 함께 사용.



# cite 태그 -inline 요소

창작물에 대한 참조를 설정.
이탤릭체로 표시



# q 태그 -inline 요소

짧은 인용문을 설정.
긴 인용문은 blockquote 태그 사용.



# u 태그 -inline 요소

밑줄있는 글자를 설정.
꾸미는 용도로 사용. (css 권장)



# code 태그 -inline 요소

컴퓨터코드 범위를 설정.



# kbd 태그 -inline 요소

키보드 사용자 입력(키)을 나타내는 범위를 설정.

예) kbd Alt /kbd



# sup sub 태그 -inline 요소

위 첨자 (sup) 와 아래 첨자 (sub) 를 설정.



# time 태그 -inline 요소

날짜와 시간을 나타내기 위한 목적으로 사용.
속성:
<strong>datetime="YYYY-MM-DD"</strong>
IE 사용불가.



# span 태그 inline요소 div 태그 같은 존재 -inline 요소

아무것도 나타내지 않는 콘텐츠 영역을 설정.
영역을 나타내서 css나 js를 사용해 스타일 잡음.



# br/ 태그 , 빈 태그 -inline 요소

줄 바꿈을 설정.



# del 태그 -inline 요소 (수정 태그)

삭제된 텍스트의 범위를 지정.

속성:
<strong>cite="URL"
datetime="YYYY-MM-DD"</strong>



# ins 태그 -inline 요소 (수정 태그)
insert.

새로 추가된 텍스트의 범위를 지정.

속성:
<strong>cite="URL"
datetime="YYYY-MM-DD"</strong>