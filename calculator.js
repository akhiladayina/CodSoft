function call() {
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let a=document.getElementById("add");
    let s=document.getElementById("sub");
    let m=document.getElementById("multiply");
    let d=document.getElementById("divide");
    let res=document.getElementById("result");
    if (a.checked) {
        res=eval(Number(num1)+Number(num2));
    }
    else if (s.checked){
         res=eval(Number(num1)-Number(num2));
    }
    else if (m.checked){
         res=eval(Number(num1)*Number(num2));
    }
    else if (d.checked){
         res=eval(Number(num1)/Number(num2));
    }
    result.value=res
}
