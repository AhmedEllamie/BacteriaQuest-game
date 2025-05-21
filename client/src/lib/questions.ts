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
    options: ["yes", "No"],
    correctAnswer: 1,
    explanation:
      "AWaRe is specifically for antibiotics to guide their rational use.",
  },
  {
    id: 2,
    text: "Does the AWaRe classification prioritize the availability of antibiotics in the 'Watch' category?",
    options: ["yes", "No"],
    correctAnswer: 1,
    explanation:
      "Ensuring the availability of 'Access' antibiotics is a key object to improve treatment of common infections and reduce the misuse of higher-risk antibiotics",
  },
  {
    id: 3,
    text: "Is the target of AWaRe to have at least 60% of national antibiotic consumption from the Access group?",
    options: ["yes", "No"],
    correctAnswer: 0,
    explanation:
      "The WHO set a target for countries to achieve at least 60% of their antibiotic consumption from the Access category to promote safer prescribing practices.",
  },
  {
    id: 4,
    text: "Is limiting the spread of multidrug-resistant infections a direct target of the watch category?",
    options: ["yes", "No"],
    correctAnswer: 1,
    explanation:
      "Reserve antibiotics are preserved for severe cases involving multidrug-resistant bacteria to prevent the spread of resistance.",
  },
  {
    id: 5,
    text: "Should every ICU-admitted patient, regardless of their disease, receive prophylactic antibiotics?",
    options: ["yes", "No"],
    correctAnswer: 1,
    explanation:
      "Prophylactic antibiotics should only be administered in specific cases, such as for surgical prophylaxis.",
  },
  {
    id: 6,
    text: "What is the definition of multidrug resistance (MDR) in the context of infectious diseases?",
    options: [
      "The ability of microorganisms to resist the action of a single antibiotic due to inherent mechanisms",
      "The ability of microorganisms to resist one antimicrobial agents from three different classes, making infections harder to treat",
      "The phenomenon where bacteria naturally lack susceptibility to all antibiotics",
    ],
    correctAnswer: 1,
    explanation:
      "MDR is The ability of microorganisms to resist one antimicrobial agents from three different classes, making infections harder to treat",
  },
  {
    id: 7,
    text: "Can Access antibiotics be used as first-line treatments for common infections?",
    options: ["yes", "No"],
    correctAnswer: 0,
    explanation:
      "Access antibiotics are safe, effective, and recommended as first-line options.",
  },
  {
    id: 8,
    text: "Does the overuse of Access antibiotics contribute significantly to antimicrobial resistance?",
    options: ["yes", "No"],
    correctAnswer: 0,
    explanation:
      "Even Access antibiotics should be used in rational way to minimize resistance.",
  },
  {
    id: 9,
    text: "A 5-year-old child has an ear infection (otitis media) and needs treatment. What is the most appropriate choice?",
    options: ["Amoxicillin", "Ciprofloxacin", "Ceftriaxone"],
    correctAnswer: 0,
    explanation:
      "Amoxicillin is an Access antibiotic and the first-line treatment for pediatric ear infections.",
  },
  {
    id: 10,
    text: "A physician prescribes Ciprofloxacin for a 54 years old man with mild urinary tract infection (UTI). What is your advice?",
    options: [
      "Approve the prescription",
      "Recommend Nitrofurantoin",
      "Suggest Colistin",
    ],
    correctAnswer: 1,
    explanation:
      "Nitrofurantoin is an Access antibiotic suitable for uncomplicated UTIs, reducing resistance risks. Ciprofloxacin is a Watch antibiotic and should not be used for mild infections. Reserve antibiotics like Colistin are inappropriate for simple UTIs and should be preserved for critical cases.",
  },
  {
    id: 11,
    text: "A 25-year-old patient has a mild skin infection (impetigo). What treatment would you recommend?",
    options: [
      "Topical antibiotics like Mupirocin",
      "Oral Clindamycin",
      "Oral Ciprofloxacin",
    ],
    correctAnswer: 0,
    explanation:
      "Mupirocin is an Access antibiotic suitable for mild skin infections, avoiding systemic antibiotic use. Clindamycin for skin infections should be preserved for MRSA infections not mild infections. Ciprofloxacin, are not required for localized skin infections",
  },
  {
    id: 12,
    text: "A 50-year-old patient is scheduled for breast surgery and requires antibiotic prophylaxis. Which antibiotic is appropriate for prophylaxis?",
    options: ["Ceftriaxone", "Meropenem", "Cefazolin"],
    correctAnswer: 2,
    explanation:
      "Antibiotics from the Access category, like Cefazolin, are suitable for surgical prophylaxis to prevent infection",
  },
  {
    id: 13,
    text: "A newborn shows signs of sepsis (fever, lethargy, and poor feeding). What antibiotic combination is appropriate?",
    options: ["Ampicillin and Gentamicin", "Levofloxacin", "Colistin"],
    correctAnswer: 0,
    explanation: "This Access combination is recommended for neonatal sepsis",
  },
  {
    id: 14,
    text: "A 62-year-old patient with diabetes develops a foot ulcer with pus and a foul smell. What is the appropriate first step?",
    options: [
      "Apply standard wound care while awaiting culture results",
      "Start empiric broad-spectrum antibiotics",
      "Prescribe a Reserve antibiotic like linezolid",
    ],
    correctAnswer: 1,
    explanation:
      "Broad-spectrum Access antibiotics should be started while awaiting culture. The absence of empirical antibiotics in the presence of an active infection worsening complications. Reserve antibiotics should be used only for confirmed resistant cases.",
  },
  {
    id: 15,
    text: "A 65-year-old patient with COPD develops increased sputum production and shortness of breath. What is the most appropriate initial antibiotic choice?",
    options: ["Doxycycline", "Ciprofloxacin", "Linezolid"],
    correctAnswer: 0,
    explanation:
      "Doxycycline, an Access antibiotic, is effective for mild to moderate COPD exacerbations. Ciprofloxacin is a Watch antibiotic and not the first-line choice for COPD exacerbations. Reserve antibiotics like Linezolid are not needed in this scenario",
  },
  {
    id: 16,
    text: "A 40-year-old patient presents with fever, flank pain, and a confirmed upper UTI. What is the first-line treatment?",
    options: ["Nitrofurantoin", "Ciprofloxacin", "Amoxicillin"],
    correctAnswer: 1,
    explanation:
      "Fluoroquinolones is first line in mild to moderate cases. Nitrofurantoin is an Access antibiotic suitable for lower UTIs. Amoxicillin is not effective for many UTI pathogens.",
  },
  {
    id: 17,
    text: "Give examples about Access group of antibiotics",
    options: ["piperacillin/Tazobactam", "Tigecycline", "Metronidazole"],
    correctAnswer: 2,
    explanation:
      "metronidazole is acess antibiotic, piperacillin/Tazobactam is watch antibiotic, Tigecycline is reserve antibiotic",
  },
  {
    id: 18,
    text: "Is Amikacin (Aminoglycosides) an example of a Watch antibiotic?",
    options: ["yes", "No"],
    correctAnswer: 1,
    explanation:
      "Amikacin belongs to the Access group in spite of it's potential side effects. It's classified in this group due to it's relatively low potential for inducing antimicrobial resistance when compared to other antibiotics.",
  },
  {
    id: 19,
    text: "Do Watch antibiotics have a higher potential for developing resistance compared to Access antibiotics?",
    options: ["yes", "No"],
    correctAnswer: 0,
    explanation:
      "Watch antibiotics require closer monitoring due to their resistance potential.",
  },
  {
    id: 20,
    text: "Give examples about Watch group of antibiotics",
    options: ["Levofloxacin", "Colistin", "sulfamethoxazole/trimethoprim"],
    correctAnswer: 0,
    explanation:
      "Levofloxacin (Flouroquinolones)is watch antibiotic, sulfamethoxazole/trimethoprim is acess antibiotc, Colistin is reserve antibiotic",
  },
  {
    id: 21,
    text: "A 70-year-old patient develops diarrhea after recent antibiotic use. What is the appropriate treatment?",
    options: ["Vancomycin", "Amoxicillin", "Ciprofloxacin"],
    correctAnswer: 0,
    explanation:
      "Vancomycin is a Watch antibiotic specifically used for severe C. difficile infections. Amoxicillin can worsen C. difficile infections. Fluoroquinolones are not appropriate for treating C. difficile.",
  },
  {
    id: 22,
    text: "A 55-year-old patient presents with fever, abdominal pain, and radiologic evidence of a perforated bowel. What is the recommended antibiotic regimen for empiric treatment?",
    options: ["Piperacillin-tazobactam", "Clindamycin", "Ciprofloxacin"],
    correctAnswer: 0,
    explanation:
      "Piperacillin-tazobactam, a Watch antibiotic, is effective against the mixed organisms in intra-abdominal infections. Clindamycin does not provide adequate coverage for intra-abdominal infections. Ciprofloxacin alone is insufficient for broad-spectrum coverage.",
  },
  {
    id: 23,
    text: "A 28-year-old presents with symptoms of gonorrhea confirmed by laboratory testing. What is the recommended treatment?",
    options: ["Ceftriaxone", "Ciprofloxacin", "Azithromycin"],
    correctAnswer: 0,
    explanation:
      "Ceftriaxone, a Watch antibiotic, is recommended for gonorrhea due to increasing resistance to other treatments. Fluoroquinolones are no longer first-line due to resistance. Azithromycin alone is not sufficient for gonorrhea treatment",
  },
  {
    id: 24,
    text: "A 30-year-old patient presents with prolonged fever, abdominal pain, and a positive blood culture for Salmonella typhi. What antibiotic would you choose?",
    options: ["Amoxicillin", "Ceftriaxone", "Linezolid"],
    correctAnswer: 1,
    explanation:
      "Ceftriaxone, a Watch antibiotic, is effective against typhoid fever caused by Salmonella typhi",
  },
  {
    id: 25,
    text: "A 45-year-old patient presents with a severe skin infection, clinically suspected to be caused by MRSA. What is the most appropriate antibiotic therapy?",
    options: ["Linezolid", "Tigecycline", "Vancomycin"],
    correctAnswer: 2,
    explanation:
      "Vancomycin is the first-line IV treatment for severe MRSA skin and soft tissue infections (SSTIs). It is highly effective and widely used in hospitalized patients with complicated. While tigecycline has activity against MRSA, it is not a first-line choice for MRSA skin infections due to its bacteriostatic nature and lower efficacy in bloodstream infections. It is generally reserved for polymicrobial infections, complicated intra-abdominal infections, and when other options are not suitable. Linezolid is an effective option for MRSA infections, including skin and soft tissue infections (SSTIs), but it is typically reserved for cases where vancomycin treatment fails or is contraindicated, such as in vancomycin-resistant cases or in patients with poor renal function.",
  },
  {
    id: 26,
    text: "Are Reserve antibiotics used as a last-line treatment (last resort) for culture-based severe infections?",
    options: ["yes", "No"],
    correctAnswer: 0,
    explanation:
      "Reserve antibiotics play a critical role in managing multidrug-resistant, culture-confirmed infections and must be preserved to maintain their effectiveness.",
  },
  {
    id: 27,
    text: "Give examples about Reserve group of antibiotics",
    options: ["Meropenem", "Gentamicin", "Colistin"],
    correctAnswer: 2,
    explanation:
      "Colistin is reserve antibiotic, Meropenem is watch antibiotic, Gentamicin is acess antibiotic",
  },
  {
    id: 28,
    text: "A 70-year-old ICU patient with severe sepsis caused by carbapenem-resistant Klebsiella pneumoniae (CRKP) requires immediate antimicrobial therapy. Which antibiotic would be most appropriate?",
    options: ["Cefepime", "Colistin", "Ciprofloxacin"],
    correctAnswer: 1,
    explanation:
      "Colistin, a Reserve antibiotic, is crucial for treating multidrug-resistant & culture-confirmed infections like sepsis in critical patients. Ciprofloxacin is ineffective against resistant organisms causing sepsis. Watch antibiotics like Cefepime are ineffective for highly resistant infections.",
  },
  {
    id: 29,
    text: "A 65-year-old ICU patient develops ventilator-associated pneumonia caused by carbapenem-resistant Klebsiella pneumoniae. What is the most appropriate antibiotic to use?",
    options: ["Ceftriaxone", "cefepime", "Colistin"],
    correctAnswer: 2,
    explanation:
      "Colistin is a Reserve antibiotic, used only for severe infections caused by multidrug-resistant & culture-confirmed infections. Cefepime and Ceftriaxone do not cover carbapenem-resistant Klebsiella.",
  },
  {
    id: 30,
    text: "A 55-year-old patient with sepsis caused by multidrug-resistant Acinetobacter baumannii. What antibiotic is recommended in this scenario?",
    options: ["Amoxicillin-clavulanate", "Tigecycline", "Azithromycin"],
    correctAnswer: 1,
    explanation:
      "Tigecycline is a Reserve antibiotic used for multidrug-resistant & culture-confirmed Acinetobacter infections",
  },
  {
    id: 31,
    text: "A 55-year-old male with a history of type 2 diabetes and prosthetic heart valve presents with fever, chills, and a new heart murmur. Blood cultures grow Methicillin-resistant Staphylococcus aureus (MRSA), and infective endocarditis (IE) is diagnosed. What antibiotic is recommended in this scenario?",
    options: ["Linezolid", "vancomycin", "ceftazedim"],
    correctAnswer: 1,
    explanation:
      "Vancomycin targeting MRSA with proven efficacy in endocarditis. Linezolid is bacteriostatic and not effective for infective endocarditis, which requires bactericidal antibiotics.",
  },
  {
    id: 32,
    text: "A 40-year-old patient presents with mild community-acquired pneumonia. He has no comorbidities and no recent antibiotic use. Would you start with:",
    options: [
      "Narrow-spectrum antibiotic (e.g., doxycycline or azithromycin) targeting typical pathogens like Streptococcus pneumoniae and Mycoplasma pneumoniae",
      "Broad-spectrum antibiotic (e.g., ceftriaxone + azithromycin) to cover a wider range, including resistant bacteria",
    ],
    correctAnswer: 0,
    explanation:
      "narrow-spectrum is preferred for low-risk, stable patients with mild CAP. Broad-spectrum is reserved for severe cases or patients with risk factors for resistant organisms.",
  },
  {
    id: 33,
    text: "A 55-year-old patient was admitted to the hospital with fever and shortness of breath. An empiric broad-spectrum antibiotic was started based on the initial clinical assessment. After 48 hours, blood cultures came back negative (no bacterial growth), and the patient clinically improved — fever subsided, and vital signs stabilized. What is your decision?",
    options: [
      "Continue the antibiotic course to complete the full duration",
      "Discontinue the antibiotic",
      "Switch to a broader-spectrum antibiotic",
    ],
    correctAnswer: 1,
    explanation:
      "If there's no clinical or lab evidence supporting a bacterial infection and cultures remain negative, stopping the antibiotic is the appropriate decision. Continuing antibiotics unnecessarily can lead to: 1)Antibiotic resistance development. 2) Increased risk of side effects (e.g., diarrhea, fungal infections, C. difficile).",
  },
];
