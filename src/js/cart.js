const addtocart = document.querySelector('.cartadd');
const text = document.querySelector(".textField");

addtocart.addEventListener("click", function() {
    sessionStorage.setItem('blacktee', "yes");
    cart();
});

function cart() {
    if (sessionStorage.getItem("blacktee") == "true") {
        console.log('eee')
        document.querySelector(".textField").style.display = "block";
    }
    else {
        console.log('xxx')
        document.querySelector(".textField").style.display = "none";
    }
};

const increase = document.querySelector('.clickme');

increase.addEventListener("click", function() {
  buttonClick();
});

var i = 0;
function buttonClick() {
    document.getElementById('inc').value = ++i;
};

const decrease = document.querySelector('.clickme-');

decrease.addEventListener("click", function() {
  buttonClickMinus();
});

function buttonClickMinus() {
    if (i == 1) {
      console.log('xxx')
    }
    else {
      document.getElementById('inc').value = --i;
    }
};