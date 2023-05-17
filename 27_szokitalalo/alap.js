let szavak = ["alma", "macska", "kiskutya" ,"kecske"]

let kitalalalando = ""

let hibakszama = 0

function elindul()
{
    //alert('Hello')
    document.getElementById("hibakep").innerHTML=""
    kitalalalando=""
    hibakszama=0
    document.getElementById("betukeret").innerHTML=""
    let veletlen = Math.floor(Math.random()*szavak.length)
    kitalalalando = szavak [veletlen]
    for (let i = 0; i < kitalalalando.length; i++)
    {
        document.getElementById("betukeret").innerHTML += 
        `
        <div id=${i} class="betuformazas">
        </div>
        `
    }

    gomb.style.visibility="hidden"
}

function beker(event)
{
    //alert(event.key)
    let leutottbetu = event.key
    let db = 0
    for (let i = 0; i < kitalalalando.length; i++) 
    {
        //alert(i)
        if(leutottbetu == kitalalalando[i])
        {
            document.getElementById(i).innerHTML = leutottbetu
            

            db ++ ;
        }

    }
    if (db == 0)
    {
        hibakszama ++;
        hibakep.innerHTML= 
        `
        <img src = "${hibakszama}.ep.png">
        `
        gomb.style.visibility="visible"
        for (let i = 0; i < kitalalalando.length; i++) 
        {
            document.getElementById(i)
            innerHTML= kitalalalando[i]
            
        }
    }
    console.log("Hibák száma: " + hibakszama)
}