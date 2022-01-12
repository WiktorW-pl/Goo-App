import Highway from '@dogstudio/highway';
import Tween from 'gsap';

class Fade extends Highway.Transition{
    in({from, to, done}) {
        from.remove();
  
        Tween.fromTo( to, 0.7, {top: 1500}, {top: 500, onComplete: done}) 
    }

    out({ from, done }){
        Tween.fromTo( from, 0.7, {top: 500}, {top: 1500, onComplete: done}) 
    }
}
export default Fade