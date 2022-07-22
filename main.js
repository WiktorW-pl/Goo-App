const notesBtn = document.querySelector('#go-to-notes');
const todoBtn = document.querySelector('#go-to-todo');

const hamburger = document.querySelector('.hamburger');
const hamburgerNav = document.querySelector('.hamburger-navigation');
const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    hamburgerNav.classList.toggle('hamburger-navigation--active');
}

hamburger.addEventListener('click', handleClick)

todoBtn.addEventListener('click', ()=>{
  window.location.href = "./tools/todo/todo.html";
})

notesBtn.addEventListener('click', ()=>{
  window.location.href = "./tools/notes/index.html";
})


pageTransition = () => {
  var timeline = gsap.timeline();

  timeline.to(".content", {
    y: 1000, 
    duration: 1
  });

}

mainAnimation = () => {
  var timeline = gsap.timeline();
  
  timeline.from(".content", {
      duration: 1,
      y: 300,
      opacity: 0,
      stagger: {
          amount: .4
      },
      delay: .8
  });
}

delay = (n) => {
  n = n || 2000;
  return new Promise((done)=> {
      setTimeout(()=> {
          done();
      }, n);
  })
}

barba.init({
  sync: true,
  transitions: [
      {
          async leave(data){
              const done = this.async();
              pageTransition();
              await delay(1000);
              done();
          },

          async enter (data){
              mainAnimation();
          },

          async once(data){
              mainAnimation();
          }
      }
  ]
});





