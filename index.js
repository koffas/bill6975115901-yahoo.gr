

function upologism(){

    
    let disc = document.getElementById("discount").value ;

    let fpa = document.getElementById("fpa").value;

    let kerdos = document.getElementById("kerdos").value;

    let timikat = document.getElementById("timikat").value;

    let telikitimi = timikat - (timikat*disc)/100;
    let telikitimi2 = telikitimi + (fpa*telikitimi)/100;
    let telikitimi3 = telikitimi2 + (kerdos*telikitimi2)/100

console.log(disc);
console.log(fpa);
console.log(kerdos);
console.log(timikat);
console.log(telikitimi3);

document.getElementById("myText").innerHTML = telikitimi3;



}

