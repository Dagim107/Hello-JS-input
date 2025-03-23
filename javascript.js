let myname;

document.getElementById('submit').onclick = function () {
    myname = document.getElementById('myname').value;
    document.getElementById('myh2').textContent = `Nice to meet you ${myname}! 😁`
}