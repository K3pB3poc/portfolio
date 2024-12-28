var btnOpenPopUp = document.getElementById("btn-popup-open");
var overlay = document.getElementById("overlay");
    popup = document.getElementById("popup");
    btnPopUpClose = document.getElementById("btn-popup-close");
    btnSubmit = document.getElementById("btn-submit");

btnOpenPopUp.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnPopUpClose.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

btnSubmit.addEventListener('click', function() {
    overlay.classList.remove('active');
});

// const cargartoken = async() => {
//     try {
//         const respuesta = await fetch ('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&symbol=IBM&interval=5min&apikey=7G494HY3DOJIWLHU');

//         console.log(respuesta);
//         if(respuesta.status ===200){
//             console.log(respuesta.status);
//             const datos = await respuesta.json();

//             let stocks = '';
//             console.log(datos);
//             datos.top_gainers.forEach(top_gainer => {
//                 stocks = stocks + '<H1>ticker</H1>';
//                 console.log(top_gainer.ticker);
//             });

//             document.getElementById('stocks').innerHTML = stocks;
            
//         }else if(respuesta.status === 401){
//             console.log('Verificar clave API');

//         }else if(respuesta.status === 404){
//             console.log('El dato buscado no se encuentra');

//         }else 
//             console.log('Error no indicado por la API')
            
            
            
        
//     }catch(error){
//         console.log(error);
//     }
        
       
// }

// cargartoken();


const cargartoken = async() => {
    try {
        const respuesta = await fetch ('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&symbol=IBM&interval=5min&apikey=7G494HY3DOJIWLHU');

        console.log(respuesta);
        if(respuesta.status ===200){
            console.log(respuesta.status);
            const datos = await respuesta.json();

            let stocks = '';
            console.log(datos);
            datos.top_gainers.forEach(top_gainer => {
                stocks = stocks + '<H1>ticker</H1>';
                console.log(top_gainer.ticker);
            });

            document.getElementById('stocks').innerHTML = stocks;
            
        }else if(respuesta.status === 401){
            console.log('Verificar clave API');

        }else if(respuesta.status === 404){
            console.log('El dato buscado no se encuentra');

        }else 
            console.log('Error no indicado por la API')

