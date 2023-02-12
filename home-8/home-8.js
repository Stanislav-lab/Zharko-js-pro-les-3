let year = prompt("Введіть Ваш рік народження");
let city = prompt("Введіть Ваше місто");
let sport = prompt("Введіть Ваш улюблений вид спорту");
let resYear;
let resCity;
let resSport;

if (year === null || year === "") {
    alert("Шкода що Ви не захотіли ввести Ваш рік народження")
} else {
    resYear = 2023 - year + " " + "роки"
}

if (city === null || city === "") {
    alert("Шкода що Ви не захотіли ввести Ваше місто")
} else if (city === "Київ") {
    resCity = "Ти живеш у столиці України"
} else if (city === "Лондон") {
    resCity = "Ти живеш у столиці Великобританії"
} else if (city === "Вашингтон") {
    resCity = "Ти живеш у столиці США"
} else {
    resCity = `Ти живеш у місті ${city}`
}

if (sport === null || sport === "") {
    alert("Шкода що Ви не захотіли ввести Ваш спорт")
} else if (sport === "бокс") {
    resSport = "Круто! Хочеш стати Кличко?"
} else if (sport === "футбол") {
    resSport = "Круто! Хочеш стати Шевченко?"
} else if (sport === "плавання") {
    resSport = "Круто! Хочеш стати Клочковою?"
} else {
    resSport = `Ваш улюблений спорт ${sport}`
}

alert(`Ваш вік ${resYear} років;
${resCity}
${resSport}`)