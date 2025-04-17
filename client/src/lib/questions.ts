export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Does the AWaRe classification apply to all medicines, not just antibiotics?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "The AWaRe classification is specifically designed for antibiotics. It categorizes antibiotics into Access, Watch, and Reserve groups to guide their appropriate use and combat antimicrobial resistance."
  },
  {
    id: 2,
    text: "Does the AWaRe classification prioritize the availability of antibiotics in the 'Watch' category?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "The AWaRe classification prioritizes the 'Access' group antibiotics, which are first-line treatments. 'Watch' antibiotics are second-line choices that should be used with caution due to their higher potential for developing resistance."
  },
  {
    id: 3,
    text: "Is the target of AWaRe to have at least 60% of national antibiotic consumption from the Access group?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "While AWaRe aims to optimize antibiotic use, a specific 60% target for Access group consumption isn't explicitly stated. The focus is on responsible and appropriate use across all categories."
  },
  {
    id: 4,
    text: "Is limiting the spread of multidrug-resistant infections a direct target of the watch category?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "Limiting the spread of multidrug-resistant infections is a key goal of the AWaRe classification.  The 'Watch' category helps achieve this by promoting judicious use of antibiotics with a higher resistance potential."
  },
  {
    id: 5,
    text: "Should every ICU-admitted patient, regardless of their disease, receive prophylactic antibiotics?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "No, prophylactic antibiotics should only be used in ICU patients when there's a high risk of infection based on clinical judgment and guidelines, not routinely for all patients."
  },
  {
    id: 6,
    text: "What is the definition of multidrug resistance (MDR) in the context of infectious diseases?",
    options: [
      "The ability of microorganisms to resist the action of a single antibiotic due to inherent mechanisms",
      "The ability of microorganisms to resist one antimicrobial agents from three different classes, making infections harder to treat",
      "The phenomenon where bacteria naturally lack susceptibility to all antibiotics"
    ],
    correctAnswer: 1,
    explanation: "Multidrug resistance (MDR) refers to a microorganism's resistance to multiple antimicrobial agents from different classes, significantly complicating treatment."
  },
  {
    id: 7,
    text: "Can Access antibiotics be used as first-line treatments for common infections?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "Yes, Access antibiotics are generally safe and effective first-line treatments for common infections."
  },
  {
    id: 8,
    text: "Does the overuse of Access antibiotics contribute significantly to antimicrobial resistance?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "While overuse of any antibiotic contributes to resistance, Access antibiotics, being first-line choices, are less likely to drive resistance compared to Watch or Reserve antibiotics if used appropriately."
  },
  {
    id: 9,
    text: "A 5-year-old child has an ear infection (otitis media) and needs treatment. What is the most appropriate choice?",
    options: [
      "Amoxicillin",
      "Ciprofloxacin",
      "Ceftriaxone"
    ],
    correctAnswer: 0,
    explanation: "Amoxicillin is generally the first-line treatment for otitis media in children due to its efficacy and safety profile."
  },
  {
    id: 10,
    text: "A physician prescribes Ciprofloxacin for a 54 years old man with mild urinary tract infection (UTI). What is your advice?",
    options: [
      "Approve the prescription",
      "Recommend Nitrofurantoin",
      "Suggest Colistin"
    ],
    correctAnswer: 1,
    explanation: "For uncomplicated UTIs, Nitrofurantoin is often preferred over Ciprofloxacin due to its lower resistance potential."
  },
  {
    id: 11,
    text: "A 25-year-old patient has a mild skin infection (impetigo). What treatment would you recommend?",
    options: [
      "Topical antibiotics like Mupirocin",
      "Oral Clindamycin",
      "Oral Ciprofloxacin"
    ],
    correctAnswer: 0,
    explanation: "Topical antibiotics like Mupirocin are generally preferred for mild skin infections like impetigo to minimize the risk of developing resistance."
  },
  {
    id: 12,
    text: "A 50-year-old patient is scheduled for breast surgery and requires antibiotic prophylaxis. Which antibiotic is appropriate for prophylaxis?",
    options: [
      "Ceftriaxone",
      "Meropenem",
      "Cefazolin"
    ],
    correctAnswer: 2,
    explanation: "Cefazolin is a commonly used antibiotic for surgical prophylaxis in breast surgery due to its broad-spectrum activity against common pathogens and low resistance."
  },
  {
    id: 13,
    text: "A newborn shows signs of sepsis (fever, lethargy, and poor feeding). What antibiotic combination is appropriate?",
    options: [
      "Ampicillin and Gentamicin",
      "Levofloxacin",
      "Colistin"
    ],
    correctAnswer: 0,
    explanation: "Ampicillin and Gentamicin are frequently used in combination for neonatal sepsis due to their broad coverage of potential pathogens."
  },
  {
    id: 14,
    text: "A 62-year-old patient with diabetes develops a foot ulcer with pus and a foul smell. What is the appropriate first step?",
    options: [
      "Apply standard wound care while awaiting culture results",
      "Start empiric broad-spectrum antibiotics",
      "Prescribe a Reserve antibiotic like linezolid"
    ],
    correctAnswer: 1,
    explanation: "For foot ulcers in diabetic patients, empiric broad-spectrum antibiotics are often initiated after obtaining wound cultures to cover potential pathogens while awaiting results."
  },
  {
    id: 15,
    text: "A 65-year-old patient with COPD develops increased sputum production and shortness of breath. What is the most appropriate initial antibiotic choice?",
    options: [
      "Doxycycline",
      "Ciprofloxacin",
      "Linezolid"
    ],
    correctAnswer: 0,
    explanation: "Doxycycline is frequently used as an initial antibiotic choice for COPD exacerbations due to its effectiveness against common respiratory pathogens."
  },
  {
    id: 16,
    text: "A 40-year-old patient presents with fever, flank pain, and a confirmed upper UTI. What is the first-line treatment?",
    options: [
      "Nitrofurantoin",
      "Ciprofloxacin",
      "Amoxicillin"
    ],
    correctAnswer: 1,
    explanation: "Ciprofloxacin or another fluoroquinolone is often a first-line treatment option for uncomplicated upper UTIs."
  },
  {
    id: 17,
    text: "Give examples about Access group of antibiotics",
    options: [
      "Piperacillin/Tazobactam",
      "Tigecycline",
      "Metronidazole"
    ],
    correctAnswer: 2,
    explanation: "Metronidazole is an example of an Access antibiotic,  used for anaerobic infections."
  },
  {
    id: 18,
    text: "Is Amikacin (Aminoglycosides) an example of a Watch antibiotic?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "Amikacin is typically considered a Watch antibiotic due to its potential for nephrotoxicity and ototoxicity, and the increasing prevalence of resistance."
  },
  {
    id: 19,
    text: "Do Watch antibiotics have a higher potential for developing resistance compared to Access antibiotics?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "Yes, Watch antibiotics generally have a higher potential for developing resistance compared to Access antibiotics due to their mechanisms of action and prior usage."
  },
  {
    id: 20,
    text: "Give examples about Watch group of antibiotics",
    options: [
      "Levofloxacin",
      "Colistin",
      "Sulfamethoxazole/trimethoprim"
    ],
    correctAnswer: 0,
    explanation: "Levofloxacin is an example of a Watch antibiotic."
  },
  {
    id: 21,
    text: "A 70-year-old patient develops diarrhea after recent antibiotic use. What is the appropriate treatment?",
    options: [
      "Oral Vancomycin",
      "Amoxicillin",
      "Ciprofloxacin"
    ],
    correctAnswer: 0,
    explanation: "Oral Vancomycin can be used to treat antibiotic-associated diarrhea caused by Clostridium difficile."
  },
  {
    id: 22,
    text: "A 55-year-old patient presents with fever, abdominal pain, and radiologic evidence of a perforated bowel. What is the recommended antibiotic regimen for empiric treatment?",
    options: [
      "Piperacillin-tazobactam",
      "Clindamycin",
      "Ciprofloxacin"
    ],
    correctAnswer: 0,
    explanation: "Piperacillin-tazobactam is a broad-spectrum antibiotic often used empirically for perforated bowel to cover various potential pathogens."
  },
  {
    id: 23,
    text: "A 28-year-old presents with symptoms of gonorrhea confirmed by laboratory testing. What is the recommended treatment?",
    options: [
      "Ceftriaxone",
      "Ciprofloxacin",
      "Azithromycin"
    ],
    correctAnswer: 0,
    explanation: "Ceftriaxone is the recommended treatment for gonorrhea due to increasing resistance to other antibiotics like Ciprofloxacin."
  },
  {
    id: 24,
    text: "A 30-year-old patient presents with prolonged fever, abdominal pain, and a positive blood culture for Salmonella typhi. What antibiotic would you choose?",
    options: [
      "Amoxicillin",
      "Ceftriaxone",
      "Linezolid"
    ],
    correctAnswer: 1,
    explanation: "Ceftriaxone is often the antibiotic of choice for typhoid fever (Salmonella typhi) due to its efficacy and safety profile."
  },
  {
    id: 25,
    text: "A 45-year-old patient presents with a severe skin infection, clinically suspected to be caused by MRSA. What is the most appropriate antibiotic therapy?",
    options: [
      "Linezolid",
      "Tigecycline",
      "Vancomycin"
    ],
    correctAnswer: 2,
    explanation: "Vancomycin is frequently used as first-line therapy for MRSA infections due to its effectiveness and safety profile."
  },
  {
    id: 26,
    text: "Are Reserve antibiotics used as a last-line treatment (last resort) for culture-based severe infections?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "Yes, Reserve antibiotics are used as a last resort for severe infections when other antibiotics have failed, primarily due to high resistance potential."
  },
  {
    id: 27,
    text: "Give examples about Reserve group of antibiotics",
    options: [
      "Meropenem",
      "Gentamicin",
      "Colistin"
    ],
    correctAnswer: 2,
    explanation: "Colistin is a Reserve antibiotic due to its toxicity and significant potential for resistance development."
  },
  {
    id: 28,
    text: "A 70-year-old ICU patient with severe sepsis caused by carbapenem-resistant Klebsiella pneumoniae (CRKP) requires immediate antimicrobial therapy. Which antibiotic would be most appropriate?",
    options: [
      "Cefepime",
      "Colistin",
      "Ciprofloxacin"
    ],
    correctAnswer: 1,
    explanation: "Colistin is often used for CRKP infections due to its effectiveness against multidrug-resistant Gram-negative bacteria."
  },
  {
    id: 29,
    text: "A 65-year-old ICU patient develops ventilator-associated pneumonia caused by carbapenem-resistant Klebsiella pneumoniae. What is the most appropriate antibiotic to use?",
    options: [
      "Ceftriaxone",
      "Cefepime",
      "Colistin"
    ],
    correctAnswer: 2,
    explanation: "Colistin is often the antibiotic of choice for ventilator-associated pneumonia caused by carbapenem-resistant Klebsiella pneumoniae."
  },
  {
    id: 30,
    text: "A 55-year-old patient with sepsis caused by multidrug-resistant Acinetobacter baumannii. What antibiotic is recommended in this scenario?",
    options: [
      "Amoxicillin-clavulanate",
      "Tigecycline",
      "Azithromycin"
    ],
    correctAnswer: 1,
    explanation: "Tigecycline is often used for multidrug-resistant Acinetobacter baumannii infections due to its broad-spectrum activity."
  },
  {
    id: 31,
    text: "A 50-year-old patient develops sepsis from a catheter-related bloodstream infection caused by vancomycin-resistant Enterococcus faecium. What is the antibiotic of choice?",
    options: [
      "Tigecycline",
      "Meropenem",
      "Linezolid"
    ],
    correctAnswer: 2,
    explanation: "Linezolid is often used for vancomycin-resistant Enterococcus faecium infections due to its effectiveness and safety profile."
  }
];