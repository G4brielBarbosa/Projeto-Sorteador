

    function sortear(){

    var quantidade = parseInt(document.getElementById("quantidade").value)
    var interval_one =parseInt(document.getElementById("interval-one").value);
    var interval_two = parseInt(document.getElementById("interval-two").value);
    
    
    var resultado = []
    
        while (resultado.length < quantidade){
            var rand = randomNumber(interval_one, interval_two);
            if (resultado.indexOf(rand) < 0)
                resultado.push(rand);
            
        }
    
        var txt = "Os números sorteados são: <br>";
            for(var i in resultado){
                txt+= resultado[i]+= "<br>"
            }
        document.getElementById("text-finish").innerHTML = txt;
    
    }
    
    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    
    }

    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', '${vh}px');

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', '${vh}px')
    })