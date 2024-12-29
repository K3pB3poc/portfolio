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

const cargartoken = async() => {
    try {
        const respuesta = await fetch ('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&interval=5min&apikey=7G494HY3DOJIWLHU');

        console.log(respuesta);
        if(respuesta.status ===200){
            console.log(respuesta.status);
            const datos = await respuesta.json();

            let stocks = '';
            console.log(datos);
            datos.top_gainers.forEach(datos => {
                stocks = stocks + `
                <div class="tarjeta" id="tarjeta">
                    <h5>Ticker</h5>
                    <div class="tarjeta-name">${datos.ticker}</div>
                    <div class="tarjeta-valor">$ ${datos.popularity}</div>
                    <div class="tarjeta-var positiva">$ ${datos.vote_average}</div>
                    </div>`;
                // console.log(datos.ticker);
            });

            document.getElementById('stocks').innerHTML = stocks;
            
        }else if(respuesta.status === 401){
            console.log('Verificar clave API');

        }else if(respuesta.status === 404){
            console.log('El dato buscado no se encuentra');

        }else 
            console.log('Error no indicado por la API')
            
            
            
        
    }catch(error){
        console.log(error);
    }
        
       
}

cargartoken();

// const cargartoken = async() => {
//     try {
//         const respuesta = await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=57035d2b16a4ebeb8bf29da4046241b7');

//         console.log(respuesta);
//         if(respuesta.status ===200){
//             console.log(respuesta.status);
//             const datos = await respuesta.json();

//             let stocks = '';
//             // console.log(datos);
//             datos.results.forEach(datos => {
//                 stocks = stocks + `
//                 <div class="tarjeta" id="tarjeta">
//                     <h5>Ticker</h5>
//                     <div class="tarjeta-name">${datos.title}</div>
//                     <div class="tarjeta-valor">$ ${datos.popularity}</div>
//                     <div class="tarjeta-var positiva">$ ${datos.vote_average}</div>
//                 </div>
                
//                 `
//                 // <h1>${datos.title}</h1>
//             });

//             document.getElementById("stocks").innerHTML = stocks;
//             console.log(stocks);
            
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


