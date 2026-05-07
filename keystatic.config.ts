import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      format: { data: 'json' },
      schema: {
        // --- Hero Section ---
        heroHeadlineEn: fields.text({
          label: 'Hero Headline (English)',
          defaultValue: "Ottawa's Trusted Exterior Cleaning Services",
        }),
        heroHeadlineFr: fields.text({
          label: 'Hero Headline (French)',
          defaultValue: 'Services de Nettoyage Extérieur de Confiance à Ottawa',
        }),
        heroSubtitleEn: fields.text({
          label: 'Hero Subtitle (English)',
          multiline: true,
          defaultValue: "From window cleaning to gutters and pressure washing, we've got you covered.",
        }),
        heroSubtitleFr: fields.text({
          label: 'Hero Subtitle (French)',
          multiline: true,
          defaultValue: 'Du nettoyage de vitres aux gouttières et au lavage sous pression, nous nous occupons de tout.',
        }),

        // --- Trust Badges ---
        googleReviewCount: fields.integer({
          label: 'Google Review Count',
          defaultValue: 16,
        }),
        googleRating: fields.text({
          label: 'Google Rating (e.g. 5/5)',
          defaultValue: '5/5',
        }),
        phone: fields.text({
          label: 'Phone Number (display)',
          defaultValue: '(613) 314-3300',
        }),
        phoneLink: fields.text({
          label: 'Phone Number (link, no spaces)',
          defaultValue: '+16133143300',
        }),

        // --- Stats Section ---
        statsRatingEn: fields.text({ label: 'Stats: Rating label (English)', defaultValue: 'verified Google reviews' }),
        statsRatingFr: fields.text({ label: 'Stats: Rating label (French)', defaultValue: 'avis Google vérifiés' }),
        statsSatisfactionEn: fields.text({ label: 'Stats: Satisfaction label (English)', defaultValue: 'Satisfaction guaranteed' }),
        statsSatisfactionFr: fields.text({ label: 'Stats: Satisfaction label (French)', defaultValue: 'Satisfaction garantie' }),
        statsDaysEn: fields.text({ label: 'Stats: Days label (English)', defaultValue: 'Open every day of the week' }),
        statsDaysFr: fields.text({ label: 'Stats: Days label (French)', defaultValue: 'Ouvert chaque semaine' }),

        // --- CTA Section ---
        ctaHeadlineEn: fields.text({ label: 'CTA Headline (English)', defaultValue: 'Ready to Get Started?' }),
        ctaHeadlineFr: fields.text({ label: 'CTA Headline (French)', defaultValue: 'Prêt à Commencer?' }),
        ctaSubtitleEn: fields.text({
          label: 'CTA Subtitle (English)',
          multiline: true,
          defaultValue: "Contact us today for a free quote. We're open 7 days a week!",
        }),
        ctaSubtitleFr: fields.text({
          label: 'CTA Subtitle (French)',
          multiline: true,
          defaultValue: "Contactez-nous dès aujourd'hui pour un devis gratuit. Nous sommes ouverts 7 jours par semaine!",
        }),
      },
    }),
  },
});
