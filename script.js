let body = document.querySelector(`body`);

setInterval(
    function bodyColorChanger(){
        let random1 = Math.round(Math.random() * 255);
        let random2 = Math.round(Math.random() * 255);
        let random3 = Math.round(Math.random() * 255);
    
        body.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
    }, 1000
);

console.log(null+0)

// this code basically changes the background color randomly