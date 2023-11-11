var zbor;
var obidi=0;
var vreme;
var brojac=0;
var niza=[];

function start()
{
    zbor=randomZbor();
    niza=Array(zbor.length).fill('_');
    prikazi();
    obidi=0;
    Obid();
    brojac=0;
    Broi();
    skrij();

    var pocetnibukvi = [];
    while (pocetnibukvi.length < 3) 
    {
        var b = Math.floor(Math.random()*zbor.length);
        if (pocetnibukvi.indexOf(b)===-1)
        {
            pocetnibukvi.push(b);
        }
    }
    for(var i of pocetnibukvi)
    {
        niza[i]=zbor[i];
    }
    prikazi();
}
function randomZbor() 
{
    const zborovi=["факултет", "град", "сонце", "музика", "вода", "дожд", "работа", "прошетка", "патека", "срце", "воздух", "населба", "љубов", "забава", "тажно", "грозје", "пчела", "птица", "лубеница","крушка"];
    return zborovi[Math.floor(Math.random()*20 +1)];
}
function prikazi()
{
    document.getElementById("zborovi").textContent = niza.join(' ');
}
function Obid()
{
    document.getElementById("brobidi").textContent = obidi;
}
function Broi()
{
    vreme=setInterval(function() 
        {
            brojac++;
            document.getElementById("odbrojuvac").textContent = brojac;
        }, 1000);
}
function proveriBukva()
{
    const bukva= document.getElementById("pogodibukva").value.toLowerCase();
    if(bukva.length==1 && /[а-ш]/.test(bukva))
    {
        if(zbor.includes(bukva))
        {
            for(var i=0;i<zbor.length;i++)
            {
                if(zbor[i]===bukva)
                {
                    niza[i]=bukva;
                }
            }
            prikazi();
            if(!niza.includes('_'))
                rezultat(true);
        }
        else
        {
            obidi++;
            Obid();
            if(obidi>=5)
                rezultat(false);
        }  
    }
    else
    {
        alert("Внесете валидна буква.");
    }
    document.getElementById("pogodibukva").value ='';
}
function rezultat(rez)
{
    clearInterval(vreme);
    var izlez = document.getElementById("rezultat");
    var poraka = document.getElementById("poraka");
    if (rez)
    {
        poraka.textContent = "БРАВО! Успешно го погодивте зборот.Поминаа "+brojac+"секунди";
    } 
    else
    {
        poraka.textContent = "Не успеавте да го погодите зборот. Обидете се повторно.";
    }
    izlez.style.display = 'flex';
}
function skrij()
{
    document.getElementById("rezultat").style.display = 'none';
}
window.addEventListener("load",start,false);
