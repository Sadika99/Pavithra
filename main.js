var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-4',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-4',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-5',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-5',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




  function hbdsong(){
      document.getElementById("hbdsong").play()
  }

    function navigate(){
        window.location.href ="index.html"
    }
    

    function wish(name){
      document.getElementById(name +"wish").play()
      document.getElementById(name +"pic").style.border= "3px solid red"


      if (name == "thasnim"){
        document.getElementById("rajipic").style.border= "none"
        document.getElementById("sadikapic").style.border= "none"
        document.getElementById("roshinipic").style.border= "none"
        document.getElementById("sivapic").style.border= "none"

       
      }else if( name == "raji"){
        document.getElementById("thasnimpic").style.border= "none"
        document.getElementById("sadikapic").style.border= "none"
        document.getElementById("roshinipic").style.border= "none"
        document.getElementById("sivapic").style.border= "none"

       

      }else if( name == "siva"){
        document.getElementById("thasnimpic").style.border= "none"
        document.getElementById("sadikapic").style.border= "none"
        document.getElementById("roshinipic").style.border= "none"
        document.getElementById("rajipic").style.border= "none"

        

      }else if( name == "sadika"){

        document.getElementById("thasnimpic").style.border= "none"
        document.getElementById("sivapic").style.border= "none"
        document.getElementById("roshinipic").style.border= "none"
        document.getElementById("rajipic").style.border= "none"

    

      }else if( name == "roshini"){
        document.getElementById("thasnimpic").style.border= "none"
        document.getElementById("sivapic").style.border= "none"
        document.getElementById("sadikapic").style.border= "none"
        document.getElementById("rajipic").style.border= "none"

        

      }
      
    }

   
    

  