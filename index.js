// Importeer express uit de node_modules map
import express from 'express'

// Maak een nieuwe express app aan
const app = express()

// maak een const voor de API, url voor squad A
const urlMembers = 'https://whois.fdnd.nl/api/v1/squad/squad-a-2022';
// const urlMyData = 'https://whois.fdnd.nl/api/v1/member/tolga-doganer';

// wacht op de url totdat je de data krijgt en DAN verander je de response van je url naar JSON
const dataMembers = await fetch(urlMembers).then(response => response.json());
// const dataMyData = await fetch(urlMyData).then(response => response.json());

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (request, response) {
// render de pagina maar ook de data van de API door naar view
  response.render('index', dataMembers)
})

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
