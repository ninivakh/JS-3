function btn() {
    var x = document.getElementById("number").value;
    if(x < 0){
        window.alert("უარყოფითი")
    }
    if(x > 0){
        window.alert("დადებითი")
    }
    if(x == 0){
        window.alert("არ შეიძლება იყოს 0-ის ტოლი")
    }
}