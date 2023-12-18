import './sass/main.sass';
import Router from './router';
import Nopage from './pages/nopage';
import Index from './pages/index';

new Router({
 Nopage: [Nopage],
 index: [Index, 'Bine ati venit!'],
});
