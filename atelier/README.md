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

`brain.js` contient les règles, sans accès à la page : `validateMessage` accepte ou refuse un message, `replyTo` choisit la réponse.

`view.js` affiche la conversation, en texte uniquement.

`app.js` relie la page aux deux modules, tient l'historique et l'enregistre dans le navigateur.
