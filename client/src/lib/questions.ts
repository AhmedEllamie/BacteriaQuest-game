export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Does the AWaRe classification apply to all medicines, not just antibiotics?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Does the AWaRe classification prioritize the availability of antibiotics in the 'Watch' category?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "Is the target of AWaRe to have at least 60% of national antibiotic consumption from the Access group?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    text: "Is limiting the spread of multidrug-resistant infections a direct target of the watch category?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    text: "Should every ICU-admitted patient, regardless of their disease, receive prophylactic antibiotics?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    text: "What is the definition of multidrug resistance (MDR) in the context of infectious diseases?",
    options: [
      "The ability of microorganisms to resist the action of a single antibiotic due to inherent mechanisms",
      "The ability of microorganisms to resist one antimicrobial agents from three different classes, making infections harder to treat",
      "The phenomenon where bacteria naturally lack susceptibility to all antibiotics"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    text: "Can Access antibiotics be used as first-line treatments for common infections?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    text: "Does the overuse of Access antibiotics contribute significantly to antimicrobial resistance?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    text: "A 5-year-old child has an ear infection (otitis media) and needs treatment. What is the most appropriate choice?",
    options: [
      "Amoxicillin",
      "Ciprofloxacin",
      "Ceftriaxone"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    text: "A physician prescribes Ciprofloxacin for a 54 years old man with mild urinary tract infection (UTI). What is your advice?",
    options: [
      "Approve the prescription",
      "Recommend Nitrofurantoin",
      "Suggest Colistin"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    text: "A 25-year-old patient has a mild skin infection (impetigo). What treatment would you recommend?",
    options: [
      "Topical antibiotics like Mupirocin",
      "Oral Clindamycin",
      "Oral Ciprofloxacin"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    text: "A 50-year-old patient is scheduled for breast surgery and requires antibiotic prophylaxis. Which antibiotic is appropriate for prophylaxis?",
    options: [
      "Ceftriaxone",
      "Meropenem",
      "Cefazolin"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    text: "A newborn shows signs of sepsis (fever, lethargy, and poor feeding). What antibiotic combination is appropriate?",
    options: [
      "Ampicillin and Gentamicin",
      "Levofloxacin",
      "Colistin"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    text: "A 62-year-old patient with diabetes develops a foot ulcer with pus and a foul smell. What is the appropriate first step?",
    options: [
      "Apply standard wound care while awaiting culture results",
      "Start empiric broad-spectrum antibiotics",
      "Prescribe a Reserve antibiotic like linezolid"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    text: "A 65-year-old patient with COPD develops increased sputum production and shortness of breath. What is the most appropriate initial antibiotic choice?",
    options: [
      "Doxycycline",
      "Ciprofloxacin",
      "Linezolid"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    text: "A 40-year-old patient presents with fever, flank pain, and a confirmed upper UTI. What is the first-line treatment?",
    options: [
      "Nitrofurantoin",
      "Ciprofloxacin",
      "Amoxicillin"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    text: "Give examples about Access group of antibiotics",
    options: [
      "Piperacillin/Tazobactam",
      "Tigecycline",
      "Metronidazole"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    text: "Is Amikacin (Aminoglycosides) an example of a Watch antibiotic?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    text: "Do Watch antibiotics have a higher potential for developing resistance compared to Access antibiotics?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    text: "Give examples about Watch group of antibiotics",
    options: [
      "Levofloxacin",
      "Colistin",
      "Sulfamethoxazole/trimethoprim"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    text: "A 70-year-old patient develops diarrhea after recent antibiotic use. What is the appropriate treatment?",
    options: [
      "Oral Vancomycin",
      "Amoxicillin",
      "Ciprofloxacin"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    text: "A 55-year-old patient presents with fever, abdominal pain, and radiologic evidence of a perforated bowel. What is the recommended antibiotic regimen for empiric treatment?",
    options: [
      "Piperacillin-tazobactam",
      "Clindamycin",
      "Ciprofloxacin"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    text: "A 28-year-old presents with symptoms of gonorrhea confirmed by laboratory testing. What is the recommended treatment?",
    options: [
      "Ceftriaxone",
      "Ciprofloxacin",
      "Azithromycin"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    text: "A 30-year-old patient presents with prolonged fever, abdominal pain, and a positive blood culture for Salmonella typhi. What antibiotic would you choose?",
    options: [
      "Amoxicillin",
      "Ceftriaxone",
      "Linezolid"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    text: "A 45-year-old patient presents with a severe skin infection, clinically suspected to be caused by MRSA. What is the most appropriate antibiotic therapy?",
    options: [
      "Linezolid",
      "Tigecycline",
      "Vancomycin"
    ],
    correctAnswer: 2
  },
  {
    id: 26,
    text: "Are Reserve antibiotics used as a last-line treatment (last resort) for culture-based severe infections?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    text: "Give examples about Reserve group of antibiotics",
    options: [
      "Meropenem",
      "Gentamicin",
      "Colistin"
    ],
    correctAnswer: 2
  },
  {
    id: 28,
    text: "A 70-year-old ICU patient with severe sepsis caused by carbapenem-resistant Klebsiella pneumoniae (CRKP) requires immediate antimicrobial therapy. Which antibiotic would be most appropriate?",
    options: [
      "Cefepime",
      "Colistin",
      "Ciprofloxacin"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    text: "A 65-year-old ICU patient develops ventilator-associated pneumonia caused by carbapenem-resistant Klebsiella pneumoniae. What is the most appropriate antibiotic to use?",
    options: [
      "Ceftriaxone",
      "Cefepime",
      "Colistin"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    text: "A 55-year-old patient with sepsis caused by multidrug-resistant Acinetobacter baumannii. What antibiotic is recommended in this scenario?",
    options: [
      "Amoxicillin-clavulanate",
      "Tigecycline",
      "Azithromycin"
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    text: "A 50-year-old patient develops sepsis from a catheter-related bloodstream infection caused by vancomycin-resistant Enterococcus faecium. What is the antibiotic of choice?",
    options: [
      "Tigecycline",
      "Meropenem",
      "Linezolid"
    ],
    correctAnswer: 2
  }
];