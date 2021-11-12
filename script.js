document.querySelector(".search").addEventListener("submit", async(e)=>{
    e.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input != ''){
        showWarning('Loading...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=785817fb5bbcfac20498b118dbb250e0&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        }else {
            showWarning('Não encontramos esta localização!')
        }
    } 
});

function showInfo(json){
    showWarning('');

    document.querySelector('.result').style.display = 'block';

    document.querySelector('.title').innerHTML =`${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector('.windInfo').innerHTML = `${json.windSpeed} <span>Km/h</span>`;

    document.querySelector('.temp img').setAttribute('src',`http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);



}

function showWarning(msg){
   document.querySelector('.warning').innerHTML = msg;

} 

