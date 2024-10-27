var cursor=document.querySelector ("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(details){
    cursor.style.left=details.x+"px"
    cursor.style.top=details.y+"px"
    blur.style.left=details.x-150+"px"
    blur.style.top=details.y-150+"px"
})

var h4=document.querySelectorAll("#nav h4")
//console.log(h4) ; //the output you see is in the form of nodes 
h4.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        cursor.style.scale=4;
        cursor.style.border="1px solid #fff"
        cursor.style.backgroundColor="transparent"
    })
    element.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border="0px solid #95C11E"
        cursor.style.backgroundColor="#95C11E"
    })

})
// var glow_button = document.querySelectorAll(".btn")
// glow_button.forEach(function(variety){
//     variety.addEventListener("mouseenter",function(){
//         cursor.style.scale=4;
//         cursor.style.border="1px solid #fff"
//         cursor.style.backgroundColor="transparent"
//     })
//     variety.addEventListener("mouseleave",function(){
//         cursor.style.scale=1;
//         cursor.style.border="0px solid #95C11E"
//         cursor.style.backgroundColor="#95C11E"
//     })

// })
// var h2=document.querySelectorAll(".elem")
// //  console.log(h2) ; //the output you see is in the form of nodes 
// h2.forEach(function(element){
//     element.addEventListener("mouseenter",function(){
//         cursor.style.scale=2;
//         cursor.style.border="1px solid #fff"
//         cursor.style.backgroundColor="transparent"
//     })
//     element.addEventListener("mouseleave",function(){
//         cursor.style.scale=1;
//         cursor.style.border="0px solid #95C11E"
//         cursor.style.backgroundColor="#95C11E"
//     })

// })





gsap.to("#nav",{
    backgroundColor:"#000",
    height:120,
    duration:2,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:3,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
     
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
     
})
gsap.from("#page4 h1",{
    y:70,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"top 75%",
        scrub:3
    }
     
})