function changeColor(){
    var hexNumber = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','f'];

    var hexcode = '';

    for(var i = 0; i < 6; i++){
        var randomIndex = Math.floor(Math.random() * hexNumber.length);

        hexcode += hexNumber[randomIndex];
    } 



    document.getElementById("hex-code").innerHTML = hexcode;
    document.getElementsByTagName('body')[0].style.background = `#${hexcode}`;
}