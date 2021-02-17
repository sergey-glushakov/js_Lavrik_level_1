window.addEventListener("load", function () {
    let div = document.querySelector(".some");
    let other = document.querySelector(".other");
    let colors = ['#f90','#f00', '#0f0'];

    div.addEventListener("click", function () {
        let num = (Math.random() * colors.length);

        
    });

    other.addEventListener("click", function () {
        oter.innerHTML += "2";
    });
});

/*

let x = 1;

function some() {
    let x = 10;

    function other() {
        let x = 100;
        console.log(x);
    }

    other();
}

some();

*/
