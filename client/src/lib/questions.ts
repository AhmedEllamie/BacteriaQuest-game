export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Which category of antibiotics should be used as first-line treatments for common infections?",
    options: [
      "Access antibiotics",
      "Watch antibiotics",
      "Reserve antibiotics",
      "All antibiotics equally"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    text: "What is a key characteristic of Watch antibiotics?",
    options: [
      "They are completely safe to use without monitoring",
      "They have higher resistance potential and require monitoring",
      "They are only used in developing countries",
      "They are no longer effective"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "When should Reserve antibiotics be used?",
    options: [
      "As first-line treatment for any infection",
      "For mild infections only",
      "For severe, multidrug-resistant infections",
      "Never"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    text: "Which antibiotic belongs to the Access category and is commonly used for urinary tract infections?",
    options: [
      "Nitrofurantoin",
      "Vancomycin",
      "Meropenem",
      "Colistin"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    text: "What action contributes to antibiotic resistance?",
    options: [
      "Completing the full course of antibiotics",
      "Taking antibiotics only when prescribed",
      "Stopping antibiotics when feeling better",
      "Following the prescribed dosage"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    text: "Which group of antibiotics should be preserved for future use?",
    options: [
      "Access antibiotics",
      "Watch antibiotics",
      "Reserve antibiotics",
      "Over-the-counter antibiotics"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    text: "What is a characteristic of Access antibiotics?",
    options: [
      "They are expensive and rare",
      "They are broad-spectrum only",
      "They have a high resistance risk",
      "They are widely available and affordable"
    ],
    correctAnswer: 3
  },
  {
    id: 8,
    text: "Which statement about Watch antibiotics is correct?",
    options: [
      "They should never be used",
      "They require careful monitoring",
      "They are completely safe",
      "They are only for children"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    text: "What is the main purpose of the WHO AWaRe classification?",
    options: [
      "To make antibiotics more expensive",
      "To guide antibiotic prescribing and use",
      "To eliminate all antibiotic use",
      "To promote over-the-counter sales"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    text: "When prescribing Watch antibiotics, what is important?",
    options: [
      "Using them for all infections",
      "Monitoring their use and impact",
      "Avoiding them completely",
      "Doubling the dose"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    text: "Which is an example of a Reserve antibiotic?",
    options: [
      "Amoxicillin",
      "Azithromycin",
      "Colistin",
      "Penicillin"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    text: "What should healthcare providers consider when prescribing antibiotics?",
    options: [
      "Patient's ability to pay only",
      "The AWaRe classification and resistance risk",
      "The newest antibiotics available",
      "Patient's preference only"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    text: "Why is antibiotic stewardship important?",
    options: [
      "To increase antibiotic sales",
      "To prevent antibiotic resistance",
      "To make treatment more expensive",
      "To reduce all antibiotic use"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    text: "What percentage of Access antibiotics should countries aim to use?",
    options: [
      "Less than 20%",
      "At least 60%",
      "100%",
      "25%"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    text: "Which condition usually requires Watch antibiotics?",
    options: [
      "Common cold",
      "Mild skin infection",
      "Hospital-acquired pneumonia",
      "Simple urinary tract infection"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    text: "What is a key principle of antibiotic stewardship?",
    options: [
      "Using antibiotics for all infections",
      "Using the right antibiotic at the right time",
      "Always using broad-spectrum antibiotics",
      "Avoiding all antibiotic use"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    text: "When should Reserve antibiotics be considered?",
    options: [
      "For first-line treatment",
      "For mild infections",
      "When other options have failed",
      "For viral infections"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    text: "What characterizes Access antibiotics?",
    options: [
      "High cost and limited availability",
      "Wide availability and lower resistance risk",
      "Restricted use only",
      "Complex monitoring requirements"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    text: "How can healthcare providers prevent antibiotic resistance?",
    options: [
      "Prescribing antibiotics for all infections",
      "Following the AWaRe classification",
      "Using only new antibiotics",
      "Avoiding all antibiotic use"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    text: "What is the role of Watch antibiotics?",
    options: [
      "First-line treatment for all infections",
      "Treatment for specific conditions with monitoring",
      "Emergency use only",
      "Over-the-counter use"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    text: "Which practice helps prevent antibiotic resistance?",
    options: [
      "Using antibiotics for viral infections",
      "Completing prescribed antibiotic courses",
      "Sharing antibiotics with others",
      "Stopping antibiotics early"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    text: "What is a key goal of the AWaRe classification?",
    options: [
      "Increasing antibiotic use",
      "Reducing access to antibiotics",
      "Optimizing antibiotic use",
      "Eliminating antibiotic use"
    ],
    correctAnswer: 2
  },
  {
    id: 23,
    text: "When are Watch antibiotics appropriate?",
    options: [
      "For all infections",
      "For specific infections with monitoring",
      "Never",
      "Only in emergencies"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    text: "What should guide antibiotic selection?",
    options: [
      "Cost only",
      "Patient preference only",
      "AWaRe classification and clinical evidence",
      "Availability only"
    ],
    correctAnswer: 2
  },
  {
    id: 25,
    text: "Why monitor Watch antibiotics closely?",
    options: [
      "They are too expensive",
      "They have higher resistance potential",
      "They are always ineffective",
      "They are too new"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    text: "What is a consequence of antibiotic resistance?",
    options: [
      "Easier treatment of infections",
      "Lower healthcare costs",
      "Reduced need for antibiotics",
      "More difficult-to-treat infections"
    ],
    correctAnswer: 3
  },
  {
    id: 27,
    text: "How should Reserve antibiotics be managed?",
    options: [
      "Used as first-line treatment",
      "Reserved for last-resort cases",
      "Used without restrictions",
      "Avoided completely"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    text: "What promotes responsible antibiotic use?",
    options: [
      "Using antibiotics for all illnesses",
      "Following AWaRe guidelines",
      "Sharing antibiotics",
      "Self-prescribing antibiotics"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    text: "Which statement about Access antibiotics is true?",
    options: [
      "They should be avoided",
      "They are first-line treatments",
      "They are only for emergencies",
      "They are always ineffective"
    ],
    correctAnswer: 1
  },
  {
    id: 30,
    text: "What is important in antibiotic stewardship?",
    options: [
      "Using all available antibiotics",
      "Following treatment guidelines",
      "Avoiding all antibiotics",
      "Using only new antibiotics"
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    text: "Which approach best supports the AWaRe classification?",
    options: [
      "Using only Reserve antibiotics",
      "Ignoring antibiotic categories",
      "Following the classification guidelines",
      "Avoiding all antibiotics"
    ],
    correctAnswer: 2
  }
];