> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Gitsearch
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Een search engine om je squadleden op te zoeken, zo kan je gemakkelijk bij zijn/haar github pagina's.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
In Gitsearch kan je zoeken naar github profielen van je squadleden, je kan gemakkelijk de naam van je squadleden intikken en direct de github url krijgen. Dit was allemaal mogelijk dankzij Node, whois API en EJS.

<!-- Voeg een mooie poster visual toe 📸 -->
![image](https://user-images.githubusercontent.com/112855878/221082897-ea750a0b-a657-45b7-b884-cd02c1a520a0.png)

<!-- Voeg een link toe naar Github Pages 🌐-->
website link: https://itchy-long-underwear-pig.cyclic.app/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
In dit project zijn de volgende technieken gebruikt:
- HTML
- CSS
- JS
- Node
- Express
- EJS

Voor dit project hebben wij server side en client side gewerkt, dit was nodig voor de API dat ik heb gebruikt binnen dit project. Voor de server side hebben ik gebruik gemaakt van Node, met node kan je javascript gebruiken voor server side coding. Server side coding heb je nodig om gebruik te kunen maken van bijvoorbeeld API's. Node is een runtime omgeving (programma dat de code uitvoert) voor het bouwen van serverside toepassingen.

Verder hebben wij gebruik gemaakt van EJS om de data dat wij krijgen van Node daadwerkelijk kunnen schrijven in HTML, EJS is een eenvoudige template waarmee je HTML-opmaak kan genereren met normale JavaScript. Dit zorgt ervoor dat je makkelijk node data kan schrijven in HTML.

Tot slot hebben wij gebruik gemaakt van Express. Express is een framework dat meer functies voor het bouwen van web applicaties aanbiedt. Express is een laag bovenop Node JS dat helpt bij routing en servers.

## Installatie
<!-- Bij Installatie staat stap-voor-stap beschreven hoe je de development omgeving moet inrichten om aan de repository te kunnen werken. -->
Voordat je de applicatie kan runnen moet je node runnen op je lokale computer, Node kan je downloaden op de volgende website: https://nodejs.org/en/.
Download de stabiele versie 18.14.0 LTS, open je terminal binnen de code editior (zoals VS code) en run de volgende command lines:

- NPM install, dit om express, ejs en alle andere afhankelijkheden te downloaden.
- NPM start om je applicatie te runnen, je lokale server wordt meestal gerunned op port 8000.

## Gebruik
De volgende stappen kan je nemen om gebruik te maken van Gitsearch:

1. Ga naar de url in deze readme, lanceer Gitsearch.
2. Klik op de inputveld en zoek naar een student.
3. klik op de Github naam (zo ga je naar een externe github profiel page) of klik op de squad naam (dit geeft een random website dat de gebruiker zelf heeft ingevuld).

## Bronnen
- Node download: https://nodejs.org/en/
- Express/node introductie: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
- FDND API: https://whois.fdnd.nl/
- EJS: https://ejs.co/

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
