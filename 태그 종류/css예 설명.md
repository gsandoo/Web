<pre>body{
    margin: 0px;
    padding: 0px;
    border-bottom: 1px solid blueviolet;
}
.header{
    
}
.container{
    background-color: white;
    width: 980px;
    margin: auto;
}
main{
    display: flex;                      >>> 수평으로 만들어줌
}
.container-left{
    padding: 20px 0px;                  >>> 글자 중앙 정렬
    background-color: aqua;
    width: 50%;
}
.logo{
    float: left;                        >>> 수평으로 만들어줌
}
.logo img{
  margin-right: 5px;
  display: block;  
}
.menu{
    
}
.menu-item{
    float:left;                         >>>수평으로 만들어줌
    padding: 6px 10px;
}
.container-right{
    width: 50%;
    background-color: green;
    float:left;
    padding: 20px 0px;
}
.item{
    font-size: 12px;
    float: left;
    padding: 6px 10px;
    margin-left:15px;
}
.clearfix::after{                       >>> float: left; 버그 푸는거
    content: "";
    display: block;
    clear: both;
}</pre>