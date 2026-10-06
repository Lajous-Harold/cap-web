# Spécification de Cap Web

Cinq critères, chacun suivi de ce qui le vérifie. Les valeurs sont celles de `cahier-personnel.json` : limite 200, mots « musique » et « cerise ». Les tests cités sont dans `tests/contrat/brain.contrat.test.js` et se lancent avec `npm test`.

1. Quand on envoie 201 caractères, Cap Web refuse le message et l'erreur cite 200 ; avec 200 caractères, il l'accepte.
   Vérifié par : test « accepte 200 caractères et refuse 201 ». Essai : dans la console de la page, `(await import('/js/brain.js')).validateMessage('a'.repeat(201)).error` contient « 200 ».

2. Quand on envoie un message vide ou fait seulement d'espaces, Cap Web le refuse avec une phrase dans le statut et n'ajoute aucune ligne à la conversation.
   Vérifié par : test « refuse le vide et les espaces seuls ». Essai : taper trois espaces puis Envoyer, la liste ne change pas et le statut explique le refus.

3. Quand on écrit « musique » ou « cerise », quelles que soient la casse et les espaces autour, Cap Web répond la phrase propre à ce mot, différente du repli et des réponses à salut, aide et test.
   Vérifié par : test « reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour ».

4. Quand on écrit une phrase que Cap Web ne connaît pas, il répond un repli distinct des réponses à salut, aide et test, qui invite à écrire « aide ».
   Vérifié par : test « répond à une phrase inconnue par un repli distinct ».

5. Quand on envoie `<b>gras</b>`, Cap Web l'affiche tel quel, chevrons compris, sans mettre le mot en gras.
   Vérifié par : test « view.js affiche du texte et ne décide pas des réponses » (aucun `innerHTML` dans `view.js`). Essai : envoyer `<b>gras</b>` dans la page, la ligne affiche `Vous : <b>gras</b>`.
