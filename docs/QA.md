# Qualitätsprüfung

## Vor jeder Veröffentlichung

- [ ] Produktions-Build erfolgreich
- [ ] GitHub Actions ohne Fehler
- [ ] Startseite und alle Hauptseiten erreichbar
- [ ] keine kaputten internen Links
- [ ] keine fehlenden Bilder oder falschen Bildpfade
- [ ] keine horizontale Scrollleiste
- [ ] Ansichten bei 320, 375, 390, 768, 1024 und 1440 Pixel geprüft
- [ ] Navigation vollständig per Tastatur bedienbar
- [ ] sichtbare Fokuszustände vorhanden
- [ ] Überschriftenhierarchie korrekt; genau eine H1 je Seite
- [ ] Formulareingaben besitzen verständliche Labels und Fehlermeldungen
- [ ] Telefon-, E-Mail- und WhatsApp-Links funktionieren
- [ ] Anfrageweg auf der jeweiligen Hostingplattform tatsächlich funktionsfähig
- [ ] prefers-reduced-motion respektiert
- [ ] Inhalte auf erfundene oder unbestätigte Aussagen geprüft
- [ ] Bildwiederholungen und unpassende mobile Ausschnitte geprüft
- [ ] Logo in Header, Favicon und Social Preview scharf und korrekt
- [ ] Seitentitel, Beschreibung, Canonical, Open Graph und Sitemap geprüft

## Hosting

### GitHub Pages

GitHub Pages ist eine statische Vorschau. Das Kontaktformular öffnet nach lokaler Validierung eine vorbereitete WhatsApp-Anfrage.

### Produktion

Die produktive Website benötigt ein Hosting mit Serverfunktion für /api/anfrage und vollständig konfigurierte Umgebungsvariablen. Vor Freigabe ist ein echter Test vom Absenden bis zum E-Mail-Eingang Pflicht.

## Visuelle Abnahme

Jede größere Änderung wird mit echten Screenshots geprüft:

- Mobil: oberer Bereich, Navigation, Formulare und mindestens eine lange Seite
- Desktop: Hero, Raster, Referenzen und Footer
- lange Texte, sehr kurze Texte und größere Schriftvergrößerung
- keine Überlagerung durch feste Bedienelemente
