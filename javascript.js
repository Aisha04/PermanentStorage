<script>
function myFunction(){
var x = document.getElementById("textinput-1");
var y = document.getElementById("textinput-2");

if(document.getElementById("+").value=="+"){
document.getElementById("textinput-3").InnerHTML=(x + y);
}
else if(document.getElementById("-").value=="-"){
document.getElementById("textinput-3").InnerHTML=(x - y);
}
else if(document.getElementById("*").value=="*"){
document.getElementById("textinput-3").InnerHTML=(x * y);
}
else if(document.getElementById("/").value=="/"){
document.getElementById("textinput-3").InnerHTML=(x / y);
}
</script>