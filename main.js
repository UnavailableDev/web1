func();
function func() {
    const time = Date().split(" ")/*into array*/.slice(4,6)/*Cut to size*/
    .join(" ")/*make arry into readable string*/.slice(0, -5)/*Cut of last 5 chars*/
    document.getElementById("p1").innerHTML = time;
    setTimeout(func, 1000)
}