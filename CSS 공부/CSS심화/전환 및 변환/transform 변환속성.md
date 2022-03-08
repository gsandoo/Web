# transform-origin

- 요소의 기준점을 설정.

- % 보단 방향을 직접 언급해서 쓰는게 나을 듯...

# transform-style

- 3d변환요소(부모)의 자식요소도 3d 변환을 사용하려면 부모요소에 적용.

- 기본값 flat: 3d자식사용불가

- preserve-3d: 자식요소도 사용 가능.


# perspective 속성

- 하위 요소를 관찰하는 원근 거리를 설정.

- 속성은 부모요소에 원근감을 주는 개념 (자식요소가 많을 때)

- 함수는 관찰 대상(자식)에 원근감을 주는 개념

# perspective-origin

- 원근거리 기준점 설정

-  perspective 속성에 정중앙(x 50% y50%)이 기본값

-  방향, %, 단위로 위치 설정.

# backface-visibility

- 3d 변환으로 회전된 요소의 뒷면 안보이게 설정.

- visible(기본) , hidden 

# matrix (a,b,c,d,e)

- 2차원 변환함수

- scale , skew , translate , rotate 를 지정


