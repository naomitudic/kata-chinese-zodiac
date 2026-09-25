//EJERCICIO (desarrollo)//

export function chineseZodiac(year){

  //Constantes//
  const elements = ["Madera", "Fuego", "Tierra", "Metal", "Agua"];
  const animals = ["Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Oveja", "Mono", "Gallo", "Perro", "Cerdo"];

  //Año de referencia//
  const baseYear = 1984;

  //Año actual//
  const yearDifference = year - baseYear;

  //Elemento (según el año)//
  const yearElement = ((Math.floor(yearDifference / 2) % 5) + 5) % 5;

  //Animal (según el año actual)//
  const yearAnimal = ((yearDifference % 12) +12) % 12;
  
  return `${elements[yearElement]} ${animals[yearAnimal]}`;
}

//EJEMPLOS (resultado)//

console.log(chineseZodiac(1984));
console.log(chineseZodiac(1985));
console.log(chineseZodiac(1986));
console.log(chineseZodiac(2024));
console.log(chineseZodiac(2026));
console.log(chineseZodiac(1924));