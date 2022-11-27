//import { mount as prodMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/Cart';
import { mount as prodMount } from 'products/Products';
import { mount as dashMount } from 'dashboard/DashboardApp';
//console.log(mount);

prodMount(document.querySelector('#mi-prod'));
cartMount(document.querySelector('#mi-cart'));
dashMount(document.querySelector('#mi-dash'));