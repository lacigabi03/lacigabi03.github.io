    function gomb()
    {
        document.getElementById("találat").innerHTML = ""
        var keres = document.getElementById("keresszo").value
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f95a7fbaebmsh1424050a03525bbp1f4569jsnc4d48f2d7de9',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };
        
        fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=' + keres , options)
            .then(response => response.json())
            .then(response => kiir(response))
            .catch(err => console.error(err));
    }

    function kiir(response)
    {
        console.log(response)
        var szam = 1


        if (response.d.length == 0)
            document.getElementById("találat").innerHTML = "Nincs találat"
        else

        for (const elem of response.d) 
        {
            console.log(elem.l)    
            var div = document.createElement("div")
            document.getElementById("talalat").appendChild(div)
            div.style.border = "1px solid blue"
            var kep = document.createElement("img")
            div.appendChild(kep)
            kep.src = elem.i.imageUrl
            kep.style.width = "300px"
            var p1 = document.createElement("p")
            div.appendChild(p1)
            p1.innerHTML = szam + ". találat : " + elem.l
            szam ++
            var p2 = document.getElementById("p")
            div.appendChild(p2)
            p2.innerHTML = elem.s
            var p3 = docment.createElement("p")
            div.appendChild(p3)
            p3.innerHTML = "Értékelés: " + elem.rank
            var p4 = documenr.createElement("p")
            div.appendChild(p4)
            if (typeof elem.y === "undefined")
            p4.innerHTML = "Év: nincs adat" 
            else
            p4.innerHTML = "Év: " + elem.style

            div.style.textAlign = "center"
            p1.style.fontSize = "30px"
            p2.style.fontSize = "15px"
            p3.style.fontStyle = "italic"
            div.style.marginBottom = "20px"
            div.style.padding.Top = "20px"

        }
    }