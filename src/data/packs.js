// ============================================================
// PACKS — fuente única de verdad de precios/alcance (Módulo 1)
// Usado por PackCard.astro en la landing.
// ============================================================

export const packs = [
  {
    id: 'vcard-pro',
    name: 'Pack vCard Pro',
    tagline: 'Votre carte de visite digitale NFC',
    setupPrice: 'dès CHF 149',
    monthlyPrice: 'CHF 9/mois',
    features: [
      '1 page vCard mobile-first',
      'Boutons contact direct (appel, WhatsApp, email, Maps)',
      "Jusqu'à 5 réseaux sociaux",
      'Bouton "Ajouter aux contacts" (.vcf)',
      '1 carte physique NFC programmée',
    ],
    featured: false,
  },
  {
    id: 'visibilite-one-page',
    name: 'Pack Visibilité One-Page',
    tagline: 'Un site clair, rapide, qui convertit',
    setupPrice: 'dès CHF 590',
    monthlyPrice: 'CHF 25/mois',
    features: [
      "Jusqu'à 6 sections sur mesure",
      'Formulaire de contact fonctionnel',
      'Bouton réservation / WhatsApp',
      'Optimisation vitesse & mobile',
      'SEO on-page de base',
    ],
    featured: true,
  },
  {
    id: 'business-local',
    name: 'Pack Business Local',
    tagline: 'Site complet + visibilité locale',
    setupPrice: 'dès CHF 1\'200',
    monthlyPrice: 'CHF 49/mois',
    features: [
      "Jusqu'à 5 pages",
      'SEO local (Google Business Profile)',
      'Formulaire avancé + réservation',
      'Analytics configuré',
      '2h de modifications incluses/mois',
    ],
    featured: false,
  },
];
