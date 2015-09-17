;
$(function () {

    var currDate = function () {
        var now = new Date(),
            seconds = now.getSeconds(),
            minutes = now.getMinutes(),
            hours = now.getHours();

        var sAngle = seconds * 6,
            mAngle = minutes * 6,
            hAngle = hours * 30 + (minutes / 2);

        $('.seconds').css({
            transform: "rotate(" + sAngle + "deg)"
        });

        $('.minutes').css({
            transform: "rotate(" + mAngle + "deg)"
        });
        $('.hours').css({
            transform: "rotate(" + hAngle + "deg)"
        });
    };

    setInterval(function () {
        currDate();
    }, 1000);

});



    //CANVAS gradient
    var canvas = document.getElementById('canvasElement');
    var ctx = canvas.getContext('2d');
    ctx.rect(0, 0, canvas.width, canvas.height);


    // add linear gradient
    function drawGradient() {
        var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

        grd.addColorStop(0, 'hsl(' + 360 * Math.random() + ', 50%, 50%)');

        grd.addColorStop(1, 'hsl(' + 360 * Math.random() + ', 50%, 50%)');

        ctx.fillStyle = grd;
        ctx.fill();
        ctx.save();
        ctx.restore();
    }

    function cLoop(){
        window.setTimeout(cLoop, 10000);
        drawGradient();
    }

    cLoop();


// VanillaJS v1.0
// Released into the Public Domain
// Your code goes here:

    var essential = document.getElementById('Elem');

    //essential.style.display = 'none';
    //essential.insertAdjacentHTML('afterend', 568);
