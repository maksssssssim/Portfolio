textContainer = document.querySelector('.skill_text');

lightIcon = document.querySelector('#light');
darkIcon = document.querySelector('#dark');
body = document.querySelector('body');

githubIcon = document.getElementById('github');
emailIcon = document.getElementById('email');
htmlIcon = document.getElementById('html');

texts = {
    'python': 'Знание библиотек Pandas и NumPy для анализа данных, визуализация данных через Seaborn.<br><br>Парсинг сайтов посредством Beautifulsoup и парсинг открытых данных через официальные API.<br><br>Создание моделей для прогнозированния данных с помощью Sklearn.<br><br>Участвовала в проектах по анализу открытых данных, занималась сбором и предварительной обработкой.',
    'js': 'Создание простейшего бекэнда для веб-сайтов на чистом Js и с помощью библиотеки React. Работала с локальным хранилищем, сейчас изучаю взаимодействие с базами данных', 
    'html': 'Фронтэнд разработка сайтов и их отдельных составляющих, UI и UX дизайн и веб-дизайн в общем. Работаю в Figma, создаю интерактивные макеты для сайтов'
}

function changeText(skillName){
    textContainer.innerHTML = texts[skillName];
}

function changeTheme(){
    lightIcon.classList.toggle('disactive');
    darkIcon.classList.toggle('disactive');

    body.classList.toggle('dark');
    
    if(body.classList.contains('dark')){
        githubIcon.src = 'https://img.icons8.com/?size=100&id=RHLuYrY4GjUv&format=png&color=93ABD4';
        emailIcon.src = 'https://img.icons8.com/?size=100&id=YRRhCXfA0Vd0&format=png&color=93ABD4';
        htmlIcon.src = 'https://img.icons8.com/?size=100&id=bGv5vHhwLQi3&format=png&color=93ABD4';
    }else{
        githubIcon.src = 'https://img.icons8.com/?size=100&id=RHLuYrY4GjUv&format=png&color=718BB7';
        emailIcon.src = 'https://img.icons8.com/?size=100&id=YRRhCXfA0Vd0&format=png&color=686E9C';
        htmlIcon.src = 'https://img.icons8.com/?size=100&id=bGv5vHhwLQi3&format=png&color=686E9C';
    }
}

function openURL(url){
    window.open(url, '_blank');
}