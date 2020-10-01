const tl = gsap.timeline({duration: 1, delay: 0,stagger:1});

async function init(){

        tl.fromTo('.presentation',{opacity:0,y:'10%'},{opacity:1,y:'0'})
        .to('.presentation',{y:'10%',opacity:0},"+=1.5")
        .fromTo('.column1',{y:'0%'},{y:'100%'})
        .fromTo('.column2',{y:'0%'},{y:'100%'},"-=.3")
        .fromTo('.column3',{y:'0%'},{y:'100%'},"-=.3")
        .fromTo('.column4',{y:'0%'},{y:'100%'},"-=.3")
        .fromTo('.column5',{y:'0%'},{y:'100%'},"-=.3")
        .fromTo('.column6',{y:'0%'},{y:'100%'},"-=.3")
        .to('.telon',{opacity:0},"+=1.2")
        .to('.main-container',{backgroundColor:'#fff'},"+=0.5")
        .to('.main-img',{width:'1000px'},'-=0.2')
        .to('.heading',{opacity:'1',y:'0'})
        .to('.text-container p',{opacity:'1',y:'0'})
        .to('.text-container2',{x:'0'})
        .to('nav',{opacity:1},'+=0.5')
    
  let after = await tl;
  if(after){
     setTimeout(()=>{
        const columns = document.querySelectorAll('.c');
        columns.forEach(cs=>{
           cs.style.display="none";
        })
     },500)
  }
}

init()

