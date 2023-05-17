fetch("https://api.open-meteo.com/v1/forecast?latitude=47.52&longitude=21.64&hourly=temperature_2m")
.then(x => x.json())
.then(y => Megjelenit(y));

function Megjelenit(y)
{
    console.log(y)
    /*<tr>
            <td></td>
            <td></td>
            <td></td>
    </tr>
    */
   sz = ""
    for (let i = 0; i < y.hourly.time.length; i++) 
    {
        //console.log(i) 
        sz += 
        `
        <tr>
            <td>${y.hourly.time[i]}</td>
            <td>${y.hourly.temperature_2m[i]} °C</td>
        </tr>
        `   
    
    } 
    document.getElementById("tablazat").innerHTML = sz



/*-------------------------------------------------------------------------------------------------------------------------------------------*/
/*(|~|)   ^ - ^   (|~|) # (|~|)   ^ - ^   (|~|) # (|~|)   ^ - ^   (|~|) (|~|)   ^ - ^   (|~|) # (|~|)   ^ - ^   (|~|) # (|~|)   ^ - ^   (|~|)*/
/*-------------------------------------------------------------------------------------------------------------------------------------------*/



var data = [
    {
      x: y.hourly.time,
      y: y.hourly.temperature_2m,
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('myDiv', data);



/*-------------------------------------------------------------------------------------------------------------------------------------------*/
/*     (|~|)   ^ - ^   (|~|) # (|~|)   ^ - ^   (|~|) # (|~|)      MAX DIAGRAM      (|~|) # (|~|)   ^ - ^   (|~|) # (|~|)   ^ - ^   (|~|)     */
/*-------------------------------------------------------------------------------------------------------------------------------------------*/



var maxtombi = []
var maxtombn = []
for (let i = 13; i < y.hourly.time.length; i += 24)
{
    maxtombi.push(y.hourly.time[i])
    maxtombn.push(y.hourly.temperature_2m[i])
}

var ujmaxtombi = maxtombi.map((elem) =>
{
    //console.log("bármi" + elem)
    var kecske = elem.split('T')
    return kecske [0]
})

var maxdata = [
    {
      x: ujmaxtombi,
      y: maxtombn,
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('maxDiv', maxdata);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/
/*     (|~|)   ^ - ^   (|~|) # (|~|)   ^ - ^   (|~|) # (|~|)      MIN DIAGRAM      (|~|) # (|~|)   ^ - ^   (|~|) # (|~|)   ^ - ^   (|~|)     */
/*-------------------------------------------------------------------------------------------------------------------------------------------*/

var mintombi = []
var mintombn = []
for (let i = 4; i < y.hourly.time.length; i += 24)
{
    mintombi.push(y.hourly.time[i])
    mintombn.push(y.hourly.temperature_2m[i])
}

var ujmintombi = mintombi.map((elem) =>
{
    //console.log("bármi" + elem)
    var kecske2 = elem.split('T')
    return kecske2 [0]
})

var mindata = [
    {
      x: ujmintombi,
      y: mintombn,
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('minDiv', mindata); 


/* ----------------------------- */

var trace1 = {
    x: ujmaxtombi,
    y: maxtombn,
    name: 'max',
    type: 'bar'
  };
  
  var trace2 = {
    x: ujmintombi,
    y: mintombn,
    name: 'min',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {barmode: 'group'};
  
  Plotly.newPlot('valamiDiv', data, layout);
}