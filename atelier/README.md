# Cap Web

Cap Web est un assistant de discussion qui répond avec des règles fixes, sans IA. Il reconnaît « salut », « bonjour », « aide », « test », « musique », « cerise » et « compost », donne un conseil de tri quand on écrit « conseil », refuse les messages vides ou de plus de 200 caractères, et garde la conversation dans le navigateur.

## Installer, lancer, tester

Node 24.20 ou plus récent. Depuis le dossier `atelier` :

```sh
npm ci
npm start
```

Puis ouvrir http://127.0.0.1:3000. Les tests se lancent avec `npm test`, la relecture du code avec `npm run lint`.

## Arborescence

```text
atelier/
  public/               la page servie au navigateur
    index.html          structure de la page
    styles.css          mise en forme, version mobile comprise
    js/brain.js         règles sans accès à la page : validateMessage, replyTo, estEnMajuscules
    js/view.js          affichage de la conversation, en texte uniquement
    js/app.js           relie la page, les règles, l'affichage et le serveur ; garde l'historique
  server/
    app.js              serveur local : fichiers publics, /version.json, /api/conseil
    start.js            démarrage sur http://127.0.0.1:3000
  tests/                tests lancés par npm test
  cahier-personnel.json limite et mots du cahier personnel
```

## Route /api/conseil

`GET /api/conseil` renvoie un conseil de tri tiré au hasard, en JSON : `{ "conseil": "..." }`. La page l'appelle quand on envoie « conseil » ; si le serveur ne répond pas, Cap Web affiche « Le serveur ne répond pas : conseil indisponible. »
