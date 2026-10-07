// Cap Web — cerveau à règles. Fonctions pures : aucun accès à la page.

// Nos réglages, les mêmes que dans cahier-personnel.json (binôme b14).
export const LIMITE = 200;

const MOTS = {
  musique: 'Vieux CD, vinyles ou écouteurs ne vont pas au bac jaune : confiez ces objets à une ressourcerie ou à la déchetterie.',
  cerise: 'Noyaux et queues de cerise vont au compost, avec les autres déchets de cuisine.',
  compost: 'Le compost accueille épluchures, marc de café et coquilles d’œufs, mais ni viande ni poisson.'
};

const liste = Object.keys(MOTS).map((mot) => `« ${mot} »`).join(' et ');

const REPONSES = {
  salut: 'Bonjour ! Je suis Cap Web, un assistant à règles. Écrivez « aide » pour voir ce que je sais faire.',
  aide: `Je connais « salut », « aide », « test », et ${Object.keys(MOTS).length} mots à moi : ${liste}.`,
  test: 'Test bien reçu : mes règles fonctionnent.',
  repli: 'Je ne connais pas encore cette phrase. Écrivez « aide » pour voir les mots que je connais.'
};

export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Le message doit être du texte.' };
  }
  const value = raw.trim();
  if (value === '') {
    return { ok: false, error: 'Le message ne doit pas être vide.' };
  }
  if (value.length > LIMITE) {
    return { ok: false, error: `Le message doit contenir ${LIMITE} caractères au maximum.` };
  }
  return { ok: true, value };
}

export function replyTo(message) {
  const texte = String(message).trim().toLowerCase();
  if (texte === 'salut' || texte === 'bonjour') {
    return REPONSES.salut;
  }
  if (texte === 'aide') {
    return REPONSES.aide;
  }
  if (texte === 'test') {
    return REPONSES.test;
  }
  if (Object.hasOwn(MOTS, texte)) {
    return MOTS[texte];
  }
  // Message inconnu : un repli distinct, qui renvoie vers « aide ».
  return REPONSES.repli;
}

// Vrai si le message a deux lettres au moins et qu'aucune n'est en minuscule.
// \p{L} reconnaît aussi les lettres accentuées (É, Ù).
export function estEnMajuscules(message) {
  if (typeof message !== 'string') {
    return false;
  }
  const lettres = message.match(/\p{L}/gu) ?? [];
  if (lettres.length < 2) {
    return false;
  }
  return lettres.every((lettre) => lettre === lettre.toUpperCase() && lettre !== lettre.toLowerCase());
}
