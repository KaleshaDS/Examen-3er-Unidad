function check(input){

    console.log("check"+input.nodeName)

    
    
    if(this.checked){
            nombre.className="hecho"
        }else{
            nombre.className=""
        }

}

function add() {
    var msn = document.createElement('li');
    msn.className = 'row';
    //pasar lo del input a la variable salida
    var nombre = document.getElementById('chatLine').value;
    li.innerHTML = '<div class="p-chat" onclick="check(this)"> ' + nombre +'</div>  <span class="text-mutted pull-right"></span>' ;
     document.getElementById('mensajes').appendChild(li);
     console.log ("holi");
}

