const API_Key = '639cf430498cc62873918d6626eef2ee';
const searchTemp = () => {
    const cityName = document.getElementById('input-field').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_Key}`).then(res => res.json()).then(data => showTemp(data));

}

document.getElementById('search-btn').addEventListener('click', searchTemp);

const showTemp = data => {
    console.log(data);
    setInnerText('city', data.name);
    setInnerText('temp', data.main.temp);
    setInnerText('clouds', data.weather[0].main);
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}