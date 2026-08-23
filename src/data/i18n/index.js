import fr from './fr.json';
import en from './en.json';
import es from './es.json';

const dictionaries = { fr, en, es };

/** Devuelve el diccionario de strings para un idioma dado (fallback: fr) */
export function getDictionary(lang) {
  return dictionaries[lang] ?? dictionaries.fr;
}
