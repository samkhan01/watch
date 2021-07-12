console.log(`this is event tutorial`);

document.getElementById("heading").addEventListener
("click", function(e){
    prompt('you have clicked');
    location.href = '//google.com'
});