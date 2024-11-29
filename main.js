let htext = document.getElementById('htext');
let hilllft = document.getElementById('hilllft');
let hillmid = document.getElementById('hillmid');
let treel = document.getElementById('treel')
let treer = document.getElementById('treer')
let hillfrnt = document.getElementById('hillfrnt');
let balloonr = document.getElementById('balloonr')
let balloonl = document.getElementById('balloonl')
let clouds = document.getElementById('clouds')

let initialHilllft = parseInt(window.getComputedStyle(hilllft).marginTop, 10)
let initialHillmid = parseInt(window.getComputedStyle(hillmid).marginTop, 10)
let initialHillright = parseInt(window.getComputedStyle(hillright).marginTop, 10)
let initialTreeL = parseInt(window.getComputedStyle(treel).marginTop, 10)
let initialTreeR = parseInt(window.getComputedStyle(treer).marginTop, 10)
let initialHillfrnt = parseInt(window.getComputedStyle(hillfrnt).marginTop, 10)
let initialBalloonR = parseInt(window.getComputedStyle(balloonr).marginLeft, 10)
let initialBalloonL = parseInt(window.getComputedStyle(balloonl).marginLeft)
let initialClouds = parseInt(window.getComputedStyle(clouds).marginBottom)


window.addEventListener('scroll',() => {
    let value =window.scrollY;

    htext.style.marginTop = value * 2.5 + 'px' ;
    hilllft.style.marginTop = (initialHilllft + value * 2.8) + 'px' ; 
    hillmid.style.marginTop = (initialHillmid + value * 1) + 'px' ; 
    hillright.style.marginTop = (initialHillright + value * 2.5) + 'px' ; 
    treel.style.marginTop = (initialTreeL + value * 1.5) + 'px';
    treer.style.marginTop = (initialTreeR + value * 1.5) + 'px';
    balloonr.style.marginLeft = (initialBalloonR + value * 1) + 'px' ;
    balloonl.style.marginLeft = (initialBalloonL + value * 3) + 'px' ; 
    clouds.style.marginBottom = (initialClouds + value * 3) + 'px' ;

})