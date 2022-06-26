let questions_html = [
  {
    question: 'Wer hat HMTL erfunden?',
    answer_1: 'Robbie Williams',
    answer_2: 'Lady Gaga',
    answer_3: 'Tim Berners-Lee',
    answer_4: 'Justin Bieber',
    right_answer: 3,
  },
  {
    question: 'Was bedeutet das HTML Tag &lt;a&gt;?',
    answer_1: 'Text Fett',
    answer_2: 'Container',
    answer_3: 'Ein Link',
    answer_4: 'Kursiv',
    right_answer: 3,
  },
  {
    question: 'Wie stellt man Text am BESTEN fett dar?',
    answer_1: '&lt;strong&gt;',
    answer_2: 'CSS nutzen',
    answer_3: '&lt;bold&gt;',
    answer_4: '&lt;b&gt;',
    right_answer: 1,
  },
  {
    question: 'Welches Attribut kann man NICHT für Textarea verwenden?',
    answer_1: 'readonly',
    answer_2: 'max',
    answer_3: 'from',
    answer_4: 'spellcheck',
    right_answer: 1,
  },
  {
    question: 'Wie bindet man eine Website in eine Website ein?',
    answer_1: '&lt;iframe&gt;,&lt;frame&gt;, and &lt;frameset&gt;,',
    answer_2: '&lt;iframe&gt;',
    answer_3: '&lt;frame&gt;',
    answer_4: '&lt;frameset&gt;',
    right_answer: 2,
  },
  {
    question:
      'Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?',
    answer_1: 'a[title] {...}',
    answer_2: 'a > [title] {...}',
    answer_3: 'a.title {...}',
    answer_4: 'a = title {...}',
    right_answer: 1,
  },
  {
    question: 'Wie definiert man in Javascript eine Variable?',
    answer_1: 'let 100 = rate;',
    answer_2: '100 = let rate',
    answer_3: 'rate = 100',
    answer_4: 'let rate = 100',
    right_answer: 4,
  },
];

let questions_handball = [
  {
    question: 'Wie viele Spieler hat jede Mannschaft inklusive Torwart?',
    answer_1: '14',
    answer_2: '7',
    answer_3: '11',
    answer_4: '6',
    right_answer: 2,
  },
  {
    question: 'Wie viele Schritte darf man beim Handball machen?',
    answer_1: '3 Schritte',
    answer_2: '4 Schritte',
    answer_3: '2 Schritte',
    answer_4: '0 Schritte',
    right_answer: 1,
  },
  {
    question:
      'Wie viele Sekunden darf man den Ball maximal beim Handball in der Hand halten?',
    answer_1: '4 Sekunden',
    answer_2: '1 Sekunden',
    answer_3: '2 Sekunden',
    answer_4: '3 Sekunden',
    right_answer: 4,
  },
  {
    question: 'Was darf der Torwart im Kreis nicht machen?',
    answer_1: 'Doppeldribbel',
    answer_2: 'mehr als die erlaubten Schritte',
    answer_3: 'mit dem Ball aus dem Kreis laufen',
    answer_4: 'den Ball an einen Feldspieler passen',
    right_answer: 3,
  },
  {
    question: 'Wann zählt ein Tor?',
    answer_1: 'wenn der Torwart hinter der Torlinie steht',
    answer_2: 'wenn der Ball auf der Torlinie ist',
    answer_3: 'wenn der Ball hinter der Torlinie ist',
    answer_4: 'wenn beide, Torwart und Ball, hinter der Torlinie sind',
    right_answer: 3,
  },
  {
    question:
      'Wenn Torwart A einen Ball abwehrt, aber dieser anschließend ins Aus rollt, gibt es...',
    answer_1: '...Einwurf für Mannschaft A',
    answer_2: '...Einwurf für Mannschaft B',
    answer_3: 'Ballbesitz für den Torwart A',
    answer_4: 'Nichts',
    right_answer: 2,
  },
  {
    question:
      'Was passiert, wenn Spieler A Spieler B den Ball aus der Hand schlägt, ohne ihn dabei zu berühren?',
    answer_1: 'Freistoß für Spieler A',
    answer_2: 'Freistoß für Spieler B',
    answer_3: 'Nichts',
    answer_4: 'Spieler A bekommt eine gelbe Karte',
    right_answer: 3,
  },
  {
    question: 'Was für eine Strafe gibt es bei einem mittel-schweren Foul?',
    answer_1: '2 Minuten',
    answer_2: '3 Minuten',
    answer_3: '4 Minuten',
    answer_4: '5 Minuten',
    right_answer: 1,
  },
  {
    question: 'Was für eine Strafe gibt es beim Handball nicht?',
    answer_1: 'gelbe Karte',
    answer_2: 'rote Karte',
    answer_3: '2 Minuten',
    answer_4: '3 Minuten',
    right_answer: 4,
  },
];

let questions_allgemein = [
  {
    question: 'Welches ist das tödlichste Tier der Welt?',
    answer_1: 'Giftschlange',
    answer_2: 'Hund',
    answer_3: 'Stechmücke',
    answer_4: 'Bandwurm',
    right_answer: 3,
  },
  {
    question:
      'An welche dieser Regeln müssen sich die Mitglieder des britischen Königshauses halten?',
    answer_1: 'Sie dürfen nicht Monopoly spielen',
    answer_2: 'Sie dürfen nicht den Film "Titanic" sehen',
    answer_3: 'Sie dürfen keinen Tee trinken',
    answer_4: 'Sie dürfen keine Schokolade essen',
    right_answer: 1,
  },
  {
    question:
      'Was bekommt man, wenn man sich das Dessert "Heiße Liebe" bestellt?',
    answer_1: 'eine Tasse heiße Schokolade mit Schnaps',
    answer_2: 'Vanilleeis mit heißen Himbeeren',
    answer_3: 'ein Date mit dem Kellner',
    answer_4: 'einen Früchtebecher mit Karamellsauce',
    right_answer: 2,
  },
  {
    question: 'Zu welchem Land gehört die Inselgruppe der Lofoten?',
    answer_1: 'Finnland',
    answer_2: 'Schweden',
    answer_3: 'Grönland',
    answer_4: 'Norwegen',
    right_answer: 4,
  },
  {
    question: 'In welcher Stadt lebt die gelbe Zeichentrick-Familie Simpson?',
    answer_1: 'Capitol City',
    answer_2: 'Ogdenvill',
    answer_3: 'Cypress Creek',
    answer_4: 'Springfield',
    right_answer: 4,
  },
  {
    question:
      'In welchen dieser Länder heißt die Hauptstadt nicht wie das Land selbst? ',
    answer_1: 'Luxemburg',
    answer_2: 'San Marino',
    answer_3: 'Liechtenstein',
    answer_4: 'Monaco',
    right_answer: 3,
  },
  {
    question: 'Nach wie vielen Ehejahren feiert man “Knoblauchhochzeit”?',
    answer_1: '33 &#189; Jahren',
    answer_2: '37 &#189; Jahren',
    answer_3: '40 &#8534; Jahren',
    answer_4: '44 &#190; Jahren',
    right_answer: 1,
  },
  {
    question: 'Wann und wo wurde die Pizza Hawaii erfunden?',
    answer_1: '1959 in Deutschland',
    answer_2: '1962 in Kanada',
    answer_3: '1966 in den USA',
    answer_4: '1970 in Italien',
    right_answer: 2,
  },
  {
    question: 'Welchen Teil des Darms gibt es nicht?',
    answer_1: 'Leerdarm',
    answer_2: 'Grimmdarm',
    answer_3: 'Krummdarm',
    answer_4: 'Reizdarm',
    right_answer: 4,
  },
  {
    question: 'In welchem Fluss liegt die Insel Grafenwerth?',
    answer_1: 'Rhein',
    answer_2: 'Weser',
    answer_3: 'Donau',
    answer_4: 'Elbe',
    right_answer: 1,
  },
  {
    question: 'Welches Land hat keine Sonne auf der Flagge?',
    answer_1: 'Marokko',
    answer_2: 'Malaysia',
    answer_3: 'Namibia',
    answer_4: 'Taiwan',
    right_answer: 1,
  },
];
