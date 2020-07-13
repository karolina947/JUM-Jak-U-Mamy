/*** POBIERANIE DNIA ***/

var teraz = new Date();
var dniTygodnia = teraz.getDay();

if (dniTygodnia == 1) document.write(`<p> Mamy poniedziałek. Co dzisiaj zjesz?</p>`);

if (dniTygodnia == 2) document.write(`<p> Mamy wtorek. Co dzisiaj zjesz?</p>`);

if (dniTygodnia == 3) document.write(`<p> Mamy środę. Co dzisiaj zjesz?</p>`);

if (dniTygodnia == 4) document.write(`<p> Mamy czwartek. Co dzisiaj zjesz?</p>`);

if (dniTygodnia == 5) document.write(`<p> Mamy piątek. Co dzisiaj zjesz?</p>`);

if (dniTygodnia == 6) document.write(`<p> Mamy sobotę. Co dzisiaj zjesz?</p>`);

if (dniTygodnia == 0) document.write(`<p> Mamy niedzielę. Co dzisiaj zjesz?</p>`);


/*** OBLICZANIE ZAMÓWIENIA ***/





/*** ROZWIJANE MENU ***/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

/*** ROZWIJANY KOSZYK ***/

function myFunctionBasket() {
  document.getElementById("myDropdownBasket").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-basket')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-basket");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 


/*** ROZWIJANY KOSZYK ***/

var price = document.getElementById('price');
var amount = document.getElementById('amount');

var name = document.getElementsByClassName('nameOrder');
name.textContent = nazwaZamówienia; 

var name = document.getElementsById('priceOrder');
name.textContent = cenaZamówienia; 

var name = document.getElementsById('amountOrder');
name.textContent = ilośćZamówienia; 

var totalPrice = document.getElementById('totalPrice');
totalPrice.textContent = totalPrice + ' zł';




/*** PŁYNNE PRZEWIJANIE ***/

	$(document).on('click', 'a', function(event){
	    event.preventDefault();
	    $('body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 800);
  });
  



