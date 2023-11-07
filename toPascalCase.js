// creare una funzione che prende un argomento e lo converte in pascal case

function toPascalCase(string) {
  //   console.log(string);
  //divido la stringa in un array di parole usando lo spazio come separatore
  const parole = string.split(" ");
  for (let i = 0; i < parole.length; i++) {
    const parola = parole[i];

    const primaLettera = parola[0].toUpperCase();

    const altreLettere = parola.substring(1).toLowerCase();

    parole[i] = primaLettera + altreLettere;

    const pascal = parole[i].join("");

    console.log(pascal);
  }
}

console.log(toPascalCase(process.argv[2]));
