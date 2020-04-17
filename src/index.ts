import {helloWorld, Ursprungscode} from './myModule';

customElements.define('my-beispiel', Ursprungscode)

import {clickMusic} from './musicplayer';
import {ajax} from './ajax';
import {updateCountdown} from './countdown';
import {changeColor} from './colorswitch';

clickMusic();
ajax();
updateCountdown();
changeColor();