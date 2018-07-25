var result = `
/*
*您好
*接下来我将用会动的简历介绍自己
*/

*{transition: all 1s;}
html{
    background: rgb(222,222,222);
    font-size: 16px;
}
#code{
    border: 1px solid red;
    padding: 16px;
}
/*
*语法高亮
*/
.token.selector{ color: #690; }
.token.punctuation{ color: #905; }
.token.property{ color: #DD4A68; }
.token.function{ color: #CE834D; }
`
var n = 0
var id = setInterval( ()=>{
  n += 1
  code.innerHTML = result.substring(0,n)
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
  styleTag.innerHTML = result.substring(0,n)
  if(n >= result.lenght){
    window.clearInterval(id)
  }
},10 )