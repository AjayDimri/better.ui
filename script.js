// Locomotive for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// gsap for animation on "a" tags
gsap.from(".nlink",{
    stagger: .1,
    y: 25,
    duration: 2,
    ease: Power2,
    opacity: 0
})


// shery js for animation
Shery.textAnimate(".headings h1" /* Element to target.*/, {
    style: 2,
    // style: 1 is also availale.
    y: 10,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".sustain", {
    stagger: .2,
    y: 30,
    duration: 2,
    ease: Expo,
    opacity: 0
})

gsap.from(".ephemeral", {
    stagger: .4,
    y: 100,
    duration: 2,
    ease: Expo,
    opacity: 0
})

gsap.from(".visit", {
    y: 50,
    duration: 2,
    ease: Expo,
    opacity: 0
})


Shery.imageEffect(".imgntext img", {
    style: 3,
    config: {"uFrequencyX":{"value":22.14,"range":[0,100]},"uFrequencyY":{"value":37.4,"range":[0,100]},"uFrequencyZ":{"value":23.66,"range":[0,100]},"geoVertex":{"range":[1,64],"value":17.35},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500138373830741},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // the above is the code which is copied from the debug pannel on the website after adjusting the animations.
    // debug: true,
    // always remove or comment out or set 'false' the "debug: true," after the required adjustments in the animation because 
    // if not it will keep showing on website.
  });

// the above will animate the img under imgntext under ephemeral.


gsap.from(".imgntext img", {
  // y: 100, //with this the image will come from below to up
  // z: -25, //with this the image will come from back to front
  // z: 10, //with this the image will come from front to back
  // x: 50, //with this the image will come diagonally : right to left
  x: -50, //with this the image will come diagonally : Left to right
  duration: 2,
  ease: Expo,
  opacity: 0
})

Shery.imageEffect(".susimagewrapper img", {
    style: 5,
    config: {"a":{"value":2.75,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // the above is the code which is copied from the debug pannel on the website after adjusting the animations.
    // debug: true,
    // always remove or comment out or set 'false' the "debug: true," after the required adjustments in the animation because 
    // if not it will keep showing on website.
  });

// the above will animate the img under susimagewrapper under sustain.


Shery.imageEffect(".picimg img", {
  style: 4,
  config: {"a":{"value":2.75,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  // the above is the code which is copied from the debug pannel on the website after adjusting the animations.
  // debug: true,
  // always remove or comment out or set 'false' the "debug: true," after the required adjustments in the animation because 
  // if not it will keep showing on website.
});

// the above will animate the img under picimg under firstpic.

Shery.imageEffect(".secondimg img", {
  style: 2,
  config: {"a":{"value":2.75,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  // the above is the code which is copied from the debug pannel on the website after adjusting the animations.
  // debug: true,
  // always remove or comment out or set 'false' the "debug: true," after the required adjustments in the animation because 
  // if not it will keep showing on website.
});

// the above will animate the img under secondimg under secondpic.


Shery.imageEffect(".bimg", { //gooey effect only works on div in this case the div is ".bimg"
  style: 5,
  config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9306560663201169},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.35,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":6.87,"range":[0,100]}},
  // debug: true,
  gooey: true,
  //gooey effect only works on div in this case the div is ".bimg"
}); 




// below, upon mouse hover or mouse enter the video will be visible
document.querySelector(".future button")
.addEventListener("mouseenter", function(){
  gsap.to(".future video",{
    opacity: 1,
    duration: 1,
    ease: Power4
  })
})

// below, upon mouse leave the video will be hide
document.querySelector(".future button")
.addEventListener("mouseleave", function(){
  gsap.to(".future video",{
    opacity: 0,
    duration: 1,
    ease: Power4
  })
})


Shery.mouseFollower(); //for the mouse follower

// for Megnet effect.
Shery.makeMagnet("#centeratag" /* Element to target.*/,);
Shery.makeMagnet(".motive h3", ".visit");
Shery.makeMagnet(".visit");
Shery.makeMagnet(".thanknote");
Shery.makeMagnet(".thanknote h3");
Shery.makeMagnet(".bottom");