//maaf mas baru bisa sejauh ini..terima kasih banyak ilmu dan bimbingannya mas, 
//mohon maaf lahir dan batin mas hehe, semangat mas

//1. deklarasi rules dasar
isChoice = false;
var com = (null);
var hasil = (null);
var choices = (null);

//2. fungsi untuk pilihan player
function suit (el, choices){
    if(isChoice) return;
    
    choices =  choices;
    isChoice = true;
     
//3. yang terjadi kalau playerChoices di klik (backgroundcolor berubah)

    el.style.backgroundColor = "#C4C4C4";
    console.log("pilihan player", choices);
//4. deklarasi variabel untuk pilihan komputer di dalam scope fungsi pilihan player
    var com = comChoice ();
    const vs = document.querySelector("#vs-tengah");

//6. result berubah tampilannya di tengah (menggantikan 'vs')
    if( choices - com == 0) {
        hasil = 'Draw', document.getElementById("vs").innerHTML='DRAW', vs.style.backgroundColor = "#035B0C" 
    } else if (choices - com == -1 || choices - com == 2 ) {
        hasil = 'Player Menang', 
        document.getElementById("vs").innerHTML=
        `PLAYER 1
        WIN`, 
        vs.style.backgroundColor = "#4C9654"
    } else if (choices - com == 1 || choices - com == -2) {
        hasil = 'Player Kalah', 
        document.getElementById("vs").innerHTML=
        `COM 
        WIN`, vs.style.backgroundColor = "#4C9654"
    }
    console.log(hasil);
};

//5. fungsi untuk pilihan komputer
function comChoice(){{
    var com = Math.random()

    if( com < 0.34) {
        com = 0 
    } else if (com >= 0.34 && com < 0.67) {
        com = 1
    } else {
        com = 2
    };

    comChoice = com;
    const el = document.querySelectorAll("div.button-comp > button")
    el[com].style.backgroundColor ="#C4C4C4";
    console.log("pilihan computer", com);
    return com;
    }
}
