const carsData = [
  {
      "image":"https://cdn.luxe.digital/media/2021/11/26104936/best-classic-cars-vintage-old-luxe-digital%402x-1536x768.jpg.webp" ,
      "tittle":"Ferrari 250 GTO 1962",
      "description": "The sleek, stylish Ferrari 250 GTO is one of the most famous classic cars of all time and for a very good reason.",
      "price": "9,99"

  },
  {
      "image":"https://cdn.luxe.digital/media/2021/11/26104913/best-classic-cars-vintage-Jaguar-E-Type-1961-old-luxe-digital%402x.jpg.webp" ,
      "tittle":"Jaguar E-Type 1961",
      "description":"No self-respecting list of classic cars could start without mentioning the Jaguar E-Type.<br>  This iconic car has a history of its own that would still break some records nowadays, <br> with impressive top speeds of 150 mph and a sleek design to match. ",
      "price": "9,99"

  },
  {
      "image":"https://cdn.luxe.digital/media/2021/11/26104949/best-classic-cars-vintage-Porsche-911-1963-old-luxe-digital%402x.jpg.webp" ,
      "tittle":"Porsche 911 1963",
      "description": "The Porsche 911 is described as a nearly perfect classic sports car—because there’s <br> always room for a little bit of improvement.<br>  A long-time staple of the classic car community, this universally<br>  loved vehicle takes plenty of prizes when it comes to impressive statistics.",
      "price": "9,99"

  },
  {
      "image":"https://cdn.luxe.digital/media/2021/11/26104836/best-classic-cars-vintage-Chevrolet-El-Camino-SS-1970-old-luxe-digital%402x.jpg.webp" ,
      "tittle":"Chevrolet El Camino SS 1970",
      "description":"Think of old-time American movies and you’ll probably find<br>  a vague image of a 1970 Chevrolet El Camino SS springs to mind",
      "price": "9,99"

  },
  {
      "image":"https://cdn.luxe.digital/media/2021/11/26104943/best-classic-cars-vintage-Oldsmobile-Starfire-Convertible-1962-old-luxe-digital%402x.jpg.webp" ,
      "tittle":"Oldsmobile Starfire Convertible 1962",
      "description":"The 1962 Oldsmobile Starfire Convertible was the pride <br> and joy of General Motors when it was first released in 1960.",
      "price": "1,299"

  },
  {
      "image":"image5" ,
      "tittle":"British Motor Corporation Mini 1959",
      "description": "There’s no classic car quite like the classic Mini. Modernized time and time again <br> with new colors and features, this is the classic car you’re most <br> likely to still see in action in the 21st century.<br>  Shortly after its initial release, the Mini quickly became<br>  one of the most popular classic cars of all time.",
      "price": "9,99"

  },
  {
      "image":"https://cdn.luxe.digital/media/2021/11/26104902/best-classic-cars-vintage-Ford-Mustang-Shelby-GT350-1965-old-luxe-digital%402x.jpg.webp" ,
      "tittle":"Ford Mustang Shelby GT350 1965",
      
      "description": "The Shelby Mustang was designed to look good and to drive fast. <br> It wasn’t specially designed for comfort, and it definitely wasn’t designed for family days out.<br>  But at least it excelled in the area it originally chose.",
      "price": "1,399"

  },
  {
      "image":"https://cdn.luxe.digital/media/2021/11/26104932/best-classic-cars-vintage-Mercedes-300SL-Gullwing-1954-old-luxe-digital%402x.jpg.webp" ,
      "tittle":"Mercedes 300SL Gullwing 1954",
      "description": "Mention the Mercedes 300SL Gullwing 1954 and you’ll undoubtedly see ears<br>  prick up, especially if you’re in a circle of classic car fans. One of the most stylish and iconic<br>  classic cars in the world, the Gullwing firmly cemented its place as <br> a premium offering as soon as it launched.",
      "price": "9,99"

  },
  {
      "image":"https://cdn.luxe.digital/media/2021/11/26104831/best-classic-cars-vintage-Chevrolet-Corvette-1963-old-luxe-digital%402x.jpg.webp" ,
      "tittle":"Chevrolet Corvette 1963",
      "description": "The Chevrolet Corvette 1963 was a rare car even when it was first released,<br>  which means sourcing a journey in one of these nowadays—let alone <br> even trying to buy one—is an adventure in itself.",
      "price": "9,99"

  },
  {
      "image":"https://cdn.luxe.digital/media/2021/11/26104827/best-classic-cars-vintage-Bugatti-Type-57-Atlantic-1938-old-luxe-digital%402x.jpg.webp" ,
      "tittle":"Bugatti Type 57 Atlantic 1938",
      "description": "Thought an older Bugatti might be more budget-friendly than a recent model? Think again. <br> You need no better proof that the 1938 Bugatti Type 57 Atlantic will ever go<br>  out of fashion than by the knowledge that Ralph Lauren owns the very <br> last one to ever be produced. First created as an entirely new design <br> by Jean Bugatti, there were only ever 710 of these models produced. ",
      "price": "9,99"

  }
]


function cartemplate(car){
  return `
  <div class="machines">
  <h2 class="tittles">${car.tittle} <span class="prices">(${car.price})</span></h2>

    <img class="car-photo" src="${car.image}">
   
    <h3 class="descript">${car.description}</h3>
  </div>
  `
}

document.getElementById("sleeks").innerHTML = `

<h1 class="sleeks-title">cars(${carsData.length} results)</h1>
${carsData.map(cartemplate).join('')}

<p class="footer"> These ${carsData.length} were added recently keep comimg back for more updates.</p>
`
