const xhr = new XMLHttpRequest();
function send_data()
{
let name = document.getElementById("name2").value;
let email = document.getElementById("email2").value;
let skype = document.getElementById("skype2").value;
let mobilePhone = document.getElementById("user_phone2").value;
if(!(name==''||email==''||mobilePhone==''))
{
xhr.open("POST","php/insertData.php");
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.onload = function (){
    if(xhr.status === 200){
        alert("OK");
    }
}
xhr.send("name="+name+"&email="+email+"&skype="+skype+"&phone="+mobilePhone);
}else
{
    alert("Обязательные поля - имя, почта,моб.телефон");
}
}
function send_alerts(num)
{
    let email = document.getElementById("subemail1").value;
    alert(email);
    xhr.open("POST","php/insertAlerts.php");
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.onload = function (){
        if(xhr.status === 200){
        alert("OK");
    }
}
xhr.send("email="+email);
}
