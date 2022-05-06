function pokaz(id){
 var tresc="";
 switch (id){  
    case 2: tresc += pokazGalerie();break;
    case 3: tresc += pokazPost(); break;
    case 4: tresc += pokazKontakt();break;
    default: tresc += pokazO();
 }
 //pobierz element o wskazanym id i ustaw jego nową zawartość:
 document.getElementById('blok').innerHTML = tresc;
}
function pokazO(){
    var tresc ='<h2><br />Pierwsze kroki</h2> ';
    tresc += '<p> W aplikacjach typu SPA ......</p>'+
    '<p class="srodek"><img src="images/baner.jpg" alt="Zdjęcie" /></p>'+
    '<article><h2>Wady SPA</h2><p>'+
    ' Czas wytworzenia oraz nakład pracy ... </p></article>';
    return tresc;
}
function pokazGalerie(){
 var tresc='<h2><br />Moja galeria</h2>';
 tresc+=' <div class="galeria">';
 for(i=1;i<=10;i++)
 {
    tresc+='<div class="slajd"> <img src="miniaturki/obraz'+i+'.JPG" alt="Zdjęcie 1" /></div>';
 }
 return tresc+'</div>';
}
function pokazKontakt(){
 var tresc='<h2><br />Kontakt</h2>';
 tresc+='Arsenii Tsarenko the best';
 return tresc;
}

function pokazPost()
{
 //funkcja generuje kod formularza – dane wpisane w odpowiednie pola przez
 //użytkownika zostaną przekazane mailem na wskazany adres, ale najpierw po
 //zajściu zdarzenia submit (wyślij) – zostanie wywołana funkcja pokazDane()
 tresc='<h2><br />Dodaj post</h2>';
 tresc+='<article class="srodek" ><form action="mailto:b.panczyk@pollub.pl"'+
 'method="post" onsubmit="return pokazDane();">'+
 'Twój email:<br />' +
 '<input type="email" name="email" id="email"required /><br />'+
 'Nazwisko i imię:<br />'+
 '<input type="text" name="i-n" id="i-n" required/><br />'+
 'Telefon:<br />'+
 '<input type="number" name="tel" id="tel" required/><br />'+
 'Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc"'+
 'name="wiadomosc" required></textarea>'+
 '<br /> <input type="submit" name="wyslij" value="Wyślij" />'+
 '</form></article>';
 return tresc;
}
function pokazDane()
{
 //Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
 //typu confirm do zatwierdzenia przez użytkownika:
 var dane="Następujące dane zostaną wysłane:\n";
 dane+="Email: "+document.getElementById('email').value+"\n";
 dane+="Imie i nazwisko: "+document.getElementById('i-n').value+"\n";
 dane+="Numer telefonu: "+document.getElementById('tel').value+"\n";
 dane+="Komentarz: "+document.getElementById('wiadomosc').value+"\n";
 if (window.confirm(dane)) return true;
 else return false;
}
