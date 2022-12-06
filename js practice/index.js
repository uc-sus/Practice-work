function PrintMessage(message){
    console.log(message);
}
function AppendString(string1, string2){
    return string1+string2;

}
var s1 = "Hello";
var s2 = " I am Sushant Sharma ";
var msg = AppendString(s1+s2);
PrintMessage(msg);

//var i;
window.onload = function(){
document.getElementById("btnChangeText").onclick= function(){
    document.getElementById('spnText').innerhtml = i++;
}
}