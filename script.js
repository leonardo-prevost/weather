document.querySelector(".search").addEventListener("submit", async(e)=>{
    e.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input != ''){
        showWarning('Loading...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=785817fb5bbcfac20498b118dbb250e0&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        if(json.code === 200) {

        }else {
            showWarning('Não encontramos esta localização!')
        }
    } 
});


function showWarning(msg){
   document.querySelector('.warning').innerHTML = msg;

} 

