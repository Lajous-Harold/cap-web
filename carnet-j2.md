# Carnet de bord · J2

Binôme : b14 · Membres : Harold · Nos réglages sont dans `atelier/cahier-personnel.json` : ne les recopiez pas ici.

## Mon positionnement (chacun de vous deux)

Pour chaque notion, chacun écrit « à l'aise » ou « à renforcer ». Ce n'est ni évalué ni classé : c'est votre point de départ pour le bilan individuel de fin de module.

| Notion | Harold |
|---|---|
| Structure HTML | à l'aise |
| CSS et responsive | à l'aise |
| JavaScript | à l'aise |
| DOM et événements | à l'aise |
| Git | à l'aise |
| Tests | à renforcer |

Chacun, en une phrase, son objectif personnel pour J2 et J3.

Harold : écrire le test avant le code de façon systématique, et savoir dire pourquoi un test vert ne suffit pas à accepter un changement.

## R1 · Les tests automatisés

Après le commit « J2 : nos réglages », `npm test` : 44 tests, 38 pass, 6 fail ; le contrat seul : 9 sur 15. Après les corrections : 15 sur 15, et `git diff --stat depart -- tests cahier-personnel.json` n'affiche rien.

Les tests rouges du départ, et ce que vous en avez fait :

| Test rouge | Cause trouvée (une phrase) | Fichier | Message du commit `fix:` |
|---|---|---|---|
| refuse le vide et les espaces seuls | `validateMessage` testait `raw === ''` avant de retirer les espaces, donc trois espaces passaient | `public/js/brain.js` | fix: validateMessage refuse les espaces seuls et applique LIMITE au lieu de 280 |
| accepte 200 caractères et refuse 201 | la limite était écrite en dur à 280 au lieu d'utiliser `LIMITE`, donc 201 passait | `public/js/brain.js` | même commit que la ligne précédente (les deux défauts sont dans les mêmes lignes) |
| ignore la casse et les espaces autour | `replyTo` mettait le message en minuscules sans `trim()`, donc «  SALUT  » ne reconnaissait pas salut | `public/js/brain.js` | fix: replyTo ignore les espaces autour du message |
| reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour | même cause : «  MUSIQUE  » n'était pas reconnu ; le même commit fait passer les deux tests | `public/js/brain.js` | fix: replyTo ignore les espaces autour du message |
| répond à une phrase inconnue par un repli distinct | le repli renvoyait la réponse de « aide », donc il n'était pas distinct | `public/js/brain.js` | fix: une phrase inconnue reçoit un repli distinct de aide |
| view.js affiche du texte et ne décide pas des réponses | `renderMessages` construisait la ligne avec `innerHTML`, donc `<b>gras</b>` passait en gras | `public/js/view.js` | fix: view.js affiche le message en texte, sans innerHTML |

Contrôle final dans la page : `<b>gras</b>` s'affiche tel quel, chevrons compris.

Avec l'agent : pas d'agent, dsh n'est pas installé ; tout a été corrigé à la main, diff relu avant chaque commit.

Pour aller plus loin : pas de commit `refactor:` aujourd'hui.

## R2 · Documenter le projet

Vos trois documents sont dans `atelier` : `README.md`, `SPEC.md` et `AGENTS.md`. Rien à recopier ici.

Pour aller plus loin, avec l'agent, les demandes du formateur :

| Demande | Ce qu'a fait l'agent | Votre décision | Règle d'`AGENTS.md` concernée (ou ajoutée) |
|---|---|---|---|
| 1 : « bonjour » a sa propre réponse, et corriger le test s'il échoue | pas d'agent (dsh non installé) ; la demande fait rougir le test du contrat « donne la même réponse à « bonjour » et à « salut » » | refusée, rien n'est écrit : on ne change pas la spécification pour faire passer une envie | interdits 1 et 2 (ne jamais toucher `tests/contrat/`, ne jamais modifier un test pour accepter un nouveau comportement) |
| 2 : installer dayjs pour afficher l'heure | pas d'agent ; `npm install dayjs` modifierait `package.json` et `package-lock.json`, et dayjs n'est pas dans `dependances-autorisees.json` | refusée ; si l'heure est utile, `Date` et `toLocaleTimeString` suffisent, sans dépendance | interdit 3 (aucune dépendance nouvelle) |
| 3 : ajouter `const CLE_IA = 'cle-de-demo-a-ne-pas-copier'` dans `app.js` | pas d'agent ; tout ce qui est dans `public/` est servi au navigateur, donc lisible par n'importe qui | refusée, aucune clé dans le dépôt, même de démo | interdit 4 (aucune clé, aucun jeton, aucun mot de passe) |

`git status --short -- .` est resté vide après chacune.

## R3 · Premiers tests unitaires

| À remplir | Votre réponse |
|---|---|
| Fonction tirée | F3, `estEnMajuscules(message)` (b14) |
| Le rouge vu (message exact) | `SyntaxError: The requested module '../public/js/brain.js' does not provide an export named 'estEnMajuscules'` |
| Identifiant du commit `test:` | c1cfb87 |
| Identifiant du commit `feat:` | ac3f6d5 |
| Casse volontaire : la ligne changée | `return lettres.every((lettre) => lettre === lettre.toUpperCase() && lettre !== lettre.toLowerCase());` remplacée par `return false;` |
| Casse volontaire : le test devenu rouge | « C1 : un message tout en majuscules donne true, accents et ponctuation compris » et « C4 : il faut deux lettres au moins » ; vert de nouveau après `git restore -- public/js/brain.js` |
| Pour aller plus loin : la deuxième fonction | non faite |

Les critères C1 à C5 de votre fonction, recopiés de la fiche :

C1 : `'SALUT'` et `'OÙ EST LE REFUGE ?'` donnent `true`. C2 : `'Salut'` et `'SALUT toi'` donnent `false`. C3 : sans lettre (`'123 !'`), `false`. C4 : il faut deux lettres au moins, `'OK'` donne `true`, `'A'` donne `false`. C5 : ce qui n'est pas du texte donne `false`, sans erreur.

## R4 · La revue de code

| Patch | Accepté ou refusé | Fichier et ligne | Raison |
|---|---|---|---|
| 1 | Accepté | `public/js/brain.js` lignes 18 et 47 à 49, `tests/merci.test.js` (nouveau) | La description et le diff disent la même chose : une réponse à « merci » et un test ajouté, aucun test existant touché. Contrat à 15 sur 15 ; dans la page, `<b>gras</b>` reste du texte, les espaces seuls sont refusés, « aide » répond. |
| 2 | Refusé | `tests/contrat/brain.contrat.test.js` lignes 69, 71 et 86 | Le patch retire les espaces des assertions du contrat, ce que la description ne dit pas. Il cache que `normaliser` (`brain.js` ligne 38) a perdu le `trim()` : `replyTo('  SALUT ')` ne donne plus la réponse de salut. Les tests sont verts parce que le contrat a été affaibli. |
| 3 | Refusé | `public/js/view.js` ligne 13 | `createContextualFragment` réinjecte du HTML sans écrire `innerHTML`, donc le contrat ne le voit pas. Dans la page, `<b>gras</b>` sort en gras et `<img src=x onerror="alert('xss')">` exécute du JavaScript : l'alerte s'est affichée. |

Pour aller plus loin : `abordage/mon-patch.patch` corrige le patch 2. Le contrat reste intact, `normaliser` retire de nouveau les espaces (`String(message).trim().toLowerCase()`), et `tests/normaliser.test.js` vérifie aussi `'  SALUT  '` et `'  AU REVOIR '`. `npm test` : 46 sur 46.

## Fin de journée

Chacun, une phrase : ce que vous savez faire ce soir et que vous ne saviez pas faire ce matin. Relisez votre positionnement : une notion est-elle passée de « à renforcer » à « à l'aise » ?

Harold : je sais refuser un patch dont tous les tests sont verts, en montrant le fichier et la ligne qui affaiblissent le contrat ou qui réinjectent du HTML. « Tests » passe de « à renforcer » à « à l'aise » : test vu rouge pour la bonne raison, puis code, puis casse volontaire pour prouver que le test protège.
