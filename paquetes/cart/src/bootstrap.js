import axios from 'axios';

const mount = (el) => {
  async function doGetRequest() {
    let names = '';
    let res = await axios.get('https://reqres.in/api/users/2');
    var obj = res.data;
    const cartText = `<h1>Hola</h1><div>Su correin es  :    ${obj.data.email} </div>`;
    el.innerHTML = cartText;

    //console.log(obj);
  }
  doGetRequest();
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  if (el) {
    mount(el);
  }
}

export { mount };
