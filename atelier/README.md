# Cap Web

Cap Web est un assistant de discussion qui répond avec des règles fixes, sans IA. Il reconnaît « salut », « bonjour », « aide », « test », « musique » et « cerise », refuse les messages vides ou de plus de 200 caractères, et garde la conversation dans le navigateur.

## Installer et lancer

Node 24.20 ou plus récent. Depuis le dossier `atelier` :

```sh
npm ci
npm start
```

Puis ouvrir http://127.0.0.1:3000. Les tests se lancent avec `npm test`.

## Les modules de `public/js`

`brain.js` contient les règles, sans accès à la page : `validateMessage` accepte ou refuse un message, `replyTo` choisit la réponse, `estEnMajuscules` dit si un message est écrit en majuscules.

`view.js` affiche la conversation, en texte uniquement.

`app.js` relie la page aux deux modules, tient l'historique et l'enregistre dans le navigateur.

## Arborescence

```text
atelier/
  public/               la page servie au navigateur
    index.html          structure de la page
    styles.css          mise en forme, version mobile comprise
    js/brain.js         règles de réponse, sans accès à la page
    js/view.js          affichage de la conversation
    js/app.js           relie la page, les règles, l'affichage et le serveur
  server/
    app.js              serveur local : fichiers publics, /version.json, /api/conseil
    start.js            démarrage sur http://127.0.0.1:3000
  tests/                tests lancés par npm test
  cahier-personnel.json limite et mots du cahier personnel
```
