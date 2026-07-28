# wunschausbau.de – Relaunch

Hochwertiger, responsiver Relaunch für **KS – Innenausbau Kevin Schmieding**.
Die Website wird mit Astro statisch erzeugt, nutzt lokale Schriften, keine Tracker
und kein clientseitiges Framework.

## Enthalten

- responsive Startseite und Unterseiten
- sieben strukturierte Leistungsseiten
- Referenzen, Über uns, Kontakt und FAQ
- barrierearme Navigation mit vollständigem Mobilmenü
- serverseitig abgesichertes Anfrageformular für Netlify
- lokale variable Schriften (Inter und Fraunces)
- responsive WebP-Bilder über Astro
- Sitemap, robots.txt, Open-Graph-Daten und strukturierte Unternehmensdaten
- reduzierte Animationen bei `prefers-reduced-motion`
- 320-Pixel-Unterstützung ohne horizontales Scrollen

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Vorschau ist anschließend normalerweise unter
`http://localhost:4321` erreichbar.

## Produktions-Build

```bash
npm run build
npm run preview
```

Der fertige Stand liegt in `dist/`. Die HTML-Dateien sollten nicht direkt per
Doppelklick geöffnet werden, weil die Website absolute Pfade für Bilder und
Schriften verwendet.

## Inhalte pflegen

- Leistungen: `src/content/leistungen/*.md`
- Kontaktdaten und Kennzahlen: `src/data/settings.json`
- Kundenstimmen: `src/data/kundenstimmen.json`
- FAQ: `src/data/faq.json`
- Bilder: `src/assets/`

## Formular auf Netlify

Die Funktion `netlify/functions/anfrage.mjs` verarbeitet das Formular unter
`/api/anfrage`. Vor dem produktiven Einsatz müssen die Werte aus `.env.example`
bei Netlify als Umgebungsvariablen hinterlegt werden:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_TO`
- `MAIL_FROM`

## Qualitätsprüfung

Der aktuelle Stand wurde erfolgreich:

- als Produktions-Build mit 17 Seiten erzeugt,
- mit dem Astro-Compiler über alle 17 Astro-Dateien geprüft,
- bei 320, 360, 390, 768, 1024 und 1440 Pixeln kontrolliert,
- auf horizontales Überlaufen, fehlende Bilder, fehlende Hauptüberschriften,
  doppelte IDs und Browserfehler geprüft,
- hinsichtlich Mobilmenü, Escape-Schließen und Formularvalidierung getestet.

## Vor der Veröffentlichung zwingend

- Impressum, Datenschutz und gegebenenfalls AGB anwaltlich erstellen bzw. prüfen
- vollständige Geschäftsanschrift ergänzen
- SMTP-Zugangsdaten konfigurieren und eine reale Testanfrage versenden
- Aussagen in Kennzahlen und Kundenstimmen vom Unternehmer bestätigen lassen
- vorhandene Referenzbilder später durch echte Projektaufnahmen ersetzen, sobald
  diese zur Verfügung stehen

Die roten Rechtstext-Platzhalter bleiben bewusst bestehen, bis geprüfte Inhalte
vom Unternehmer oder einem Rechtsanwalt vorliegen.
