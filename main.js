function writeCode(prefix,code,fn){
    let n = 0
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let id = setInterval( ()=>{
      n += 1
      domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'css');
      styleTag.innerHTML = prefix + code.substring(0,n)
      domCode.scrollTop = 10000
      if(n >= code.length){
        window.clearInterval(id)
        fn.call()
      }
    },10 )    
}

function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval( ()=>{
        n += 1
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if(n >= markdown.length){
          window.clearInterval(id)
          fn.call()
        }
    },10 )    
}

var result = `
/*
*您好
*接下来我将用会动的简历介绍自己
*/

*{transition: all 1s;}
html{
    background: #8D8C77;
    font-size: 16px;
}
#code{
    border: 1px solid black;
    padding: 16px;
}
/*
*语法高亮
*/
.token.selector{ color: #690; }
.token.punctuation{ color: #905; }
.token.property{ color: #DD4A68; }
.token.function{ color: #CE834D; }
/*
*添加一个小动画
*/
html{
    perspective: 1000px;
}
#code{
    -webkit-transiton: none;
    transiton: none;
    -webkit-transform:rotateY(10deg) translateZ(-100px);
    transform:rotateY(10deg) translateZ(-100px);
    animation: breath 0.5s infinite alternate-reverse;
}
/*
*下面正式介绍自己
*首先加一张白纸
*/
#code-wrapper{
    left: 0;
    width: 50%;
}

#paper > .content{
    display: block;
}

/* 于是我就可以在白纸上写字了，请看右边 */
`
var result2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`
var result3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`
var md = `
# 自我介绍
> 我叫 xxx

> 2019年即将毕业于北京科技大学 本科

> 自学前端半年

> 希望应聘前端开发岗位


# 技能介绍
熟悉Javascript css

# 项目介绍
* 简历
* 轮播

# 联系方式
* QQ：505133853
* 电话：18101357268
* 邮箱: 18101357268@163.com

`
writeCode('',result ,()=>{
    createPaper(()=>{
            writeMarkdown(md,()=>{
                writeCode(result,result2,()=>{
                    convertMarkdownToHtml(()=>{
                        writeCode(result + result2,result3,()=>{})
                    })
                })
            })
        
    } )
})

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    content.id = content
    document.body.appendChild(paper)
    paper.appendChild(content)
    fn && fn.call()
}
function convertMarkdownToHtml(fn){
    var div = document.createElement('div')  
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
  }
