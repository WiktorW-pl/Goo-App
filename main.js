import Highway from '@dogstudio/highway';
import Fade from './js/transiton'

const H = new Highway.Core({
    transitions:{
        default: Fade
    }
});