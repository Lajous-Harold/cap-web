# Conventions de Cap Web

Ce fichier est lu par l'agent comme par un nouveau développeur. Ce qui n'y est pas écrit, ni l'un ni l'autre ne le sait.

## Nommage

1. Une fonction porte un verbe qui dit ce qu'elle fait, en camelCase : `validateMessage`, `replyTo`, `renderMessages`. Une fonction qui répond par oui ou non commence par `est` : `estEnMajuscules`.
2. Une constante de réglage s'écrit en majuscules : `LIMITE`, `MOTS`. La limite et les mots n'existent qu'à un seul endroit, en haut de `public/js/brain.js`, et ont les mêmes valeurs que `cahier-personnel.json`.
3. Un fichier porte le nom de son rôle, en minuscules : `brain.js` pour les règles, `view.js` pour l'affichage, `app.js` pour relier la page aux deux. Un test s'appelle comme ce qu'il teste : `tests/estEnMajuscules.test.js`.
4. Un message de commit commence par son type, puis dit ce qui change, en français : `fix:` (un défaut corrigé), `feat:` (une fonction nouvelle), `test:` (un test seul), `docs:` (la documentation), `refactor:` (un renommage sans changement de comportement). Exemple : `fix: replyTo ignore les espaces autour du message`.

## Interdits

1. Ne modifie jamais `tests/contrat/`, `browser/contrat.spec.js` ni `cahier-personnel.json`. Si un test te semble faux, arrête et explique pourquoi, sans rien écrire.
2. Ne modifie jamais un test existant pour qu'il accepte un nouveau comportement. Si une demande fait rougir un test, arrête : c'est la demande qui change la spécification, et un humain décide.
3. N'ajoute aucune dépendance : pas de `npm install`, aucune modification de `package.json` ni de `package-lock.json`. La liste autorisée est `dependances-autorisees.json`, et elle ne contient aucune bibliothèque pour la page.
4. N'écris jamais une clé, un jeton ou un mot de passe dans un fichier du dépôt, même « de démo » ou « à ne pas copier ». Une clé n'a sa place que dans les réglages de l'outil qui l'utilise.
5. Le texte reste du texte : `textContent` ou `append` d'une chaîne, jamais `innerHTML`, `outerHTML`, `insertAdjacentHTML` ni `createContextualFragment`.
6. `public/js/brain.js` reste pur : aucun `document`, `window` ni `localStorage`, même dans un commentaire.
7. Ne lance aucune commande `git` : les commits sont faits par un humain, après relecture du diff.
