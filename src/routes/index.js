import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/character';
import Error404 from '../pages/error404';
import getHash from '../utils/gethash';
import resolveRoutes from '../utils/resolveRoutes';

//Generar las Rutas de la APP
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Conteact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let  hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
};

export default router;