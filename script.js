let zbozi = [
    {nazev: "a", cena: 1500},
    {nazev: "b", cena: 1300},
    {nazev: "c", cena: 1100},
    {nazev: "d", cena: 1200},
    {nazev: "e", cena: 1800},
    {nazev: "f", cena: 1600},
    {nazev: "g", cena: 1700}
];

let koupene_zbozi = [];

function vypis(){
    let zbozi_vypis = document.getElementById("zbozi");
    let uctenka = document.getElementById("uctenka");
    let cena = document.getElementById("input");
    let soucet = 0;

    cena.value = "Celková částka je: 0 Kč"

    zbozi_vypis.innerHTML = ""; //smazani contnetnu
    uctenka.innerHTML = ""; //smazani contnetnu
    
    for(let i = 0; i<zbozi.length; i++){
        zbozi_vypis.innerHTML += i+1 + ". " + zbozi[i].nazev + " " + zbozi[i].cena + " Kč" + "<br>"; 
    }

    for(let i = 0; i<koupene_zbozi.length; i++){
        uctenka.innerHTML += i+1 + ". " + koupene_zbozi[i].nazev + " " + koupene_zbozi[i].cena + " Kč" + "<br>";

        soucet += koupene_zbozi[i].cena;
        cena.value = "Celková částka je: " + soucet + " Kč";
    }

}

function pridat(){
    let y = true;
    if(zbozi.length ==0){
        alert("Hele kámo, všechno si už vybral");
        y = false;
    }

    while(y==true){
        let promt = prompt("Jakou chcete výbavu?");
        
        if(prompt == null){
            y = false;
        }
        else if(promt == "")
        {
            alert("Nic si přece nenapsal");
        }
        else if(zbozi.length ==0){
            alert("Hele kámo, všechno si už vybral");
            y = false;
        }
        else{

            for(let i = 0; i<zbozi.length;i++){
                let x = promt.toUpperCase();
                let y = zbozi[i].nazev.toUpperCase();
                console.log(i);
                console.log(zbozi.length + "zbozi");
                if(x==y)
                {
                    koupene_zbozi.push(zbozi[i]);
                    zbozi.splice(i, 1);
                    vypis();
                    break;
                }
                else if((i+1) == zbozi.length)
                {
                    alert("Asi sjetej, ale kurva tady nic takového nemáme");
                }
            } 
        }
    }
}

function odebrat(){
    let y = true;

    if(koupene_zbozi.length == 0){
        alert("Hele kámo, všechno si nic nevybral");
        y = false;
    }

    while(y==true){
        let promt = prompt("Jakou chcete výbavu?");
        
        if(prompt == null){
            y = false;
        }
        else if(promt == "")
        {
            alert("Nic si přece nenapsal");
        }
        else if(koupene_zbozi.length ==0){
            alert("Hele kámo, všechno si už vybral");
            y = false;
        }
        else{

            for(let i = 0; i<koupene_zbozi.length;i++){
                let x = promt.toUpperCase();
                let y = koupene_zbozi[i].nazev.toUpperCase();
                console.log(i);
                console.log(koupene_zbozi.length + "zbozi");
                if(x==y)
                {
                    zbozi.push(koupene_zbozi[i]);
                    koupene_zbozi.splice(i, 1);
                    vypis();
                    break;
                }
                else if((i+1) == koupene_zbozi.length)
                {
                    alert("Asi sjetej, ale kurva tady nic takového nemáme");
                }
            } 
        }
    }
}

function pridej_vse(){
    if(zbozi.length == 0){
        alert("Vše jsi už pidal do košíku");
    }
    else{
        zbozi = [];
    
        koupene_zbozi = [
            {nazev: "a", cena: 1500},
            {nazev: "b", cena: 1300},
            {nazev: "c", cena: 1100},
            {nazev: "d", cena: 1200},
            {nazev: "e", cena: 1800},
            {nazev: "f", cena: 1600},
            {nazev: "g", cena: 1700}
        ];

        vypis();
    }
   
}

function odebrat_vse(){
    if(koupene_zbozi.length == 0){
        alert("Však máš už vše odebrané");
    }
    else{
        zbozi = [
            {nazev: "a", cena: 1500},
            {nazev: "b", cena: 1300},
            {nazev: "c", cena: 1100},
            {nazev: "d", cena: 1200},
            {nazev: "e", cena: 1800},
            {nazev: "f", cena: 1600},
            {nazev: "g", cena: 1700}
        ];
        
        koupene_zbozi = [];
    
        vypis();
    }
    
}

//window.onload = () => { vypis();};