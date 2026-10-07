# Bilan individuel · Harold

## Niveau de départ

Positionnement de mardi : à l'aise en structure HTML, CSS et responsive, JavaScript, DOM et événements, Git ; à renforcer en tests.

## Deux acquis, avec leur preuve

1. Écrire le test avant le code et le voir rouge pour la bonne raison. Commit `c1cfb87` (test: estEnMajuscules, rouge « does not provide an export named »), puis `ac3f6d5` (feat: estEnMajuscules, vert). La casse volontaire `return false;` a fait rougir les critères C1 et C4 : le test protège vraiment le code.
2. Échanger des données avec le serveur sans bloquer la page. Commit `f237648` (route `/api/conseil` en JSON, avec son test), puis `83672b1` (`demanderConseil` avec `async`, `await`, `try` et `catch`) : serveur arrêté, la page affiche « Le serveur ne répond pas : conseil indisponible. » au lieu d'un écran blanc.

## Deux points à renforcer

1. Les tests de la page : `npm test` couvre `brain.js` et le serveur, mais le compteur, le conseil et la version mobile ne sont vérifiés qu'à la main. Il manque des tests navigateur.
2. Les données qui viennent de dehors : `charger()` vérifie que l'historique stocké est un tableau, mais pas que chaque élément est un message. Une valeur comme `[null]` peut encore casser la page.

## Objectif

Faire tourner le lint et les tests à chaque push, sur une machine neuve, et ajouter un test pour chaque défaut corrigé.
