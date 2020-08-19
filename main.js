let div = document.querySelector("p");
let style = document.querySelector("style");
let string = `/*大家好,我叫一路人.
今天我给大家展示一下我的前端功底.
首先制作一个div.
*/
.box{
    width: 300px;
    height: 300px;
}
/**/
/*
div变圆
*/
.box {
   
    border-radius: 50%;
    
  }
  /*
  线性渐变.
  */
  .box{
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 50%,
        rgba(255, 255, 255, 1) 50%
      );
  }
  /*径向渐变*/
  .box::after {
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 20%,
      rgba(0, 0, 0, 1) 20%
    );
  }
  .box::before {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 20%,
      rgba(255, 255, 255, 1) 20%
    );
  }
`;
let stringP = string;
let n = 1;
let p = 1;
let x = setInterval(() => {
  if (p >= stringP.length) {
    clearInterval(x);
  }
  if (stringP[p] === string[12]) {
    div.innerHTML = stringP.slice(0, p) + "<br>";
    stringP = stringP.slice(0, p) + "<br>" + stringP.slice(p);
    p = p + 5;
    n++;
  } else {
    div.innerHTML = stringP.slice(0, p);
    console.log(p);
    style.innerHTML = string.slice(0, n);
    n++;
    p++;
  }
  window.scrollTo(0, 9999);
  div.scrollTo(0, 9999);
}, 5);
