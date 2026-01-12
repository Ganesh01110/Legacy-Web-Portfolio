var active = 3;
var mncrcls = document.querySelectorAll(".mncircl")
var sec = document.querySelectorAll(".secondd")


gsap.to(mncrcls[active-1], {
    opacity: 0.7,
})

gsap.to(sec[active-1], {
    opacity: 1,
})

mncrcls.forEach(function(val,index){
    val.addEventListener("click",function () {
       gsap.to("#circle",{
        rotate:(3-(index+1))*12.5,
        ease:Expo.easeInOut,
        duration: 2.5,
       })
       greyout()
       gsap.to(this,{
        opacity:0.7,
       })
       gsap.to(sec[index],{
        opacity:1,
       })
    })
})

function greyout(){
    gsap.to(mncrcls,{
        opacity: 0.2
    })

    gsap.to(sec,{
        opacity:0.3
    })
}

gsap.to("#circle",{
    rotate:0,
    ease:Expo.easeInOut,
    duration: 2.5,
});