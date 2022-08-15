/* let site, design, adapt;
let calculator = {
    price: [
        [5000, 40000, 10000, 20000],
        [2000, 5000, 10000],
        [1000, 2000, 3000],
    ],
    days: [
        [1, 10, 2, 4],
        [1, 3, 5],
        [1, 2, 3],
    ],
    run(siteType, designType, adaptType){
        let sum = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][designType-1]) + parseInt(calculator.price[2][adaptType-1]);
        let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][designType-1]) + parseInt(calculator.days[2][adaptType-1]);
        alert("Стоимость: "+ sum +"\nСроки: "+ days);
    }
}

function getAnswers(){
    site = prompt("Выберите тип сайта: \n1 - Лэндинг \n2 - Интернет- м-н \n3 - Сайт-визитка \n4 - Корп.сайт");
        if(site != 1 && site != 2 && site != 3 && site != 4 ){
            alert("Некорректный ввод");
            getAnswers();
            return;
        }
    design = prompt("Адаптивность: \n1 - Шаблонный, \n2 -  Уникальный, \n3 - WOW-Дизайн");
        if(design != 1 && design != 2 && design != 3 ){
            alert("Некорректный ввод");
            getAnswers();
            return;  
        }
    adapt = prompt("Адаптивность: \n1 - Только - ПК \n2 - Мобильная версия \n3 - ПК + Мобильная");
        if(adapt != 1 && adapt != 2 && adapt != 3 ){
            alert("Некорректный ввод");
            getAnswers();
            return; 
    }
    calculator.run(site, design, adapt);
}
getAnswers(); */

           
                  
                  
                  
                  
                  
                  
                  
                  
                  