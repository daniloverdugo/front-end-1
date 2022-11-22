//consola: npm i axios
import axios from 'axios';

const mount = (el) => {
  async function doGetRequest() {
    let names = 'aer...';
    let res = await axios.get('https://reqres.in/api/unknown');
    var obj = res.data;

    obj.data.forEach((element) => {
      names += `<div>${element.name}</div>`;
    });

    el.innerHTML = names;
    //console.log(obj);
  }
  doGetRequest();
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    mount(el);
  }
}

export { mount };
