+ function obteermedia() {
    var a= parseint(document.getElementById("a").value); 
    var b= parseint(document.getElementById("b").value);
    var c= parseint(document.getElementById("c").value);

    var media= (a+b+c) /3;
    Document.getElementById("resultado").innerHTML = "RESULTADO:"+ media;
    console.log (a + b + c)
}