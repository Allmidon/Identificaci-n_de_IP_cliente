//alert("Hola mundo");

let ip=document.getElementById("ip");
let pais=document.getElementById("pais");
let continente=document.getElementById("continente");
let zona_horaria=document.getElementById("zona_horaria");

const SolocitudAPI = () => {
  // Tu código a ejecutar cuando la página se carga

  console.log('La página se ha cargado completamente.');
  // Puedes agregar aquí cualquier código adicional que desees ejecutar al cargar la página.

  // Hacer una petición para un usuario con ID especifico
  axios.get('https://itp-bdd-asc-01.000webhostapp.com/php-geoip-api/')
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response.data);
      if (ip) ip.innerHTML = response.data.ip;
      if (pais) pais.innerHTML = response.data.pais;
      if (continente) continente.innerHTML = response.data.continente;
      if (zona_horaria) zona_horaria.innerHTML = response.data.zona_horaria;

      //ip.innertHTML = response.data.ip;
      //pais.innertHTML = response.data.pais;
      //contienete.innertHTML = response.data.contienete;
      //zona_horaria.innertHTML = response.data.zona_horaria;
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
};

 // Asignar la función al evento 'load' del objeto 'window'
 //Llama al evento load cada que se actializa la pagiina
 //Y llama a la funcion de solicitud
 window.addEventListener('load', SolocitudAPI);