let demo = document.querySelector('#demo');
let style = document.querySelector('#style');
let n = 0;
let string = `
/*hello，大家好！
我是一个前端新人。
我没有前端功底
这是我做（抄）的一个小demo
*/
#div1 {
    width:300px;
    height:300px;
    border:1px solid grey;
    border-radius: 50%;
   
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
    word-break:break-all;
} 
#div1::before {
    content: '';
    width:150px;
    height:150px;
    position:absolute;
    top:0%; left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%);
}
#div1::after {
    content: '';
    width:150px;
    height:150px;
    position:absolute;
    top:50%;  
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%);
}

`;
let string2 = '';
// let n = 0;
let step = () => {
    n++;
    setTimeout(() => {
        // console.log(string.substring(0,n));
        
        if(string[n] === '\n'){
            string2 += '<br>';
        }
        else if(string[n] === ' '){
            string2 += '&nbsp;';
        }
        else{
            string2 += string[n];
        }
        demo.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,9999);
        demo.scrollTo(0,999);
        // html.scrollTo(0,999);
        console.log(string.substring(0,n));
        // style.innerHTML = string2;
        if(n < string.length - 1){
            step();
        }
    }, 10);
}

step();

// style.innerHTML = `/*我是一只可爱的赵康。
// 12345
// */
// body{
// color: red;   
// }`;