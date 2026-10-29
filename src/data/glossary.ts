export type GlossaryCategory =
  | 'Court'
  | 'Police'
  | 'Consumer'
  | 'Housing'
  | 'Work'
  | 'Rights'
  | 'Documents'
  | 'Digital';

export interface GlossaryTerm {
  term: string;
  plain: string;
  category: GlossaryCategory;
  seeAlso?: string;
}

export const glossary: GlossaryTerm[] = [
  {
    term: 'Affidavit',
    plain:
      'A written statement you sign and swear is true. It is used as evidence in some proceedings, and a false affidavit can have consequences.',
    category: 'Documents',
  },
  {
    term: 'Arbitration',
    plain:
      'A private process where an arbitrator decides a dispute instead of a court. It usually happens because a contract says so.',
    category: 'Court',
  },
  {
    term: 'Bail',
    plain:
      'Release from custody while a case continues. It can come with conditions, and it is not the same as being found innocent.',
    category: 'Police',
  },
  {
    term: 'Caveat',
    plain:
      'A notice asking a court not to pass an order without hearing you first. It is a pre-emptive move, not a full case.',
    category: 'Court',
  },
  {
    term: 'Cognizable offence',
    plain:
      'An offence serious enough that the police can investigate without a magistrate’s permission. An FIR is registered for these.',
    category: 'Police',
  },
  {
    term: 'Non-cognizable offence',
    plain:
      'An offence where the police usually need a magistrate’s order to investigate. They record it in a different register, not an FIR.',
    category: 'Police',
  },
  {
    term: 'Complaint',
    plain:
      'A written or oral statement that someone has committed an offence or done you a legal wrong. It starts different processes depending on where you file it.',
    category: 'Court',
  },
  {
    term: 'Consumer dispute',
    plain:
      'A disagreement about a defective product, a deficient service, or an unfair trade practice. It can go to a consumer commission.',
    category: 'Consumer',
  },
  {
    term: 'Contempt of court',
    plain:
      'Disobeying a court order or interfering with the administration of justice. It is a serious allegation, not a casual insult.',
    category: 'Court',
  },
  {
    term: 'Contract',
    plain:
      'An agreement the law will enforce. It needs an offer, acceptance, consideration (usually payment), and an intention to be legally bound.',
    category: 'Documents',
  },
  {
    term: 'CPIO',
    plain:
      'Central Public Information Officer. The person in a public authority who is responsible for answering your RTI request.',
    category: 'Rights',
  },
  {
    term: 'Cross-examination',
    plain:
      'Questioning the other side’s witness in court, usually to test their version of events.',
    category: 'Court',
  },
  {
    term: 'Damages',
    plain:
      'Money a court orders one side to pay the other as compensation for a loss. It is not a criminal fine.',
    category: 'Court',
  },
  {
    term: 'Decree',
    plain:
      'The formal, final decision of a civil court that settles the claims in the case.',
    category: 'Court',
  },
  {
    term: 'Deficiency in service',
    plain:
      'A service that was performed badly, late, or not at all, compared with what was promised. It is a consumer-law concept.',
    category: 'Consumer',
  },
  {
    term: 'Defendant',
    plain:
      'The person or organisation being sued or accused in a case. In criminal cases, the word “accused” is also used.',
    category: 'Court',
  },
  {
    term: 'Evidence',
    plain:
      'The material a court uses to decide what happened: documents, messages, photographs, recordings, witness statements, and physical items.',
    category: 'Court',
  },
  {
    term: 'Ex parte',
    plain:
      'An order passed without the other side being present or heard. It can sometimes be set aside later.',
    category: 'Court',
  },
  {
    term: 'FIR',
    plain:
      'First Information Report. The document the police register when they receive information about a cognizable offence. You are entitled to a free copy.',
    category: 'Police',
  },
  {
    term: 'Habeas corpus',
    plain:
      'A writ asking a court to check whether a person is being held lawfully. It is used against unlawful detention.',
    category: 'Rights',
  },
  {
    term: 'Interim order',
    plain:
      'A temporary order made while the case is still going on. It can protect the position until the final decision.',
    category: 'Court',
  },
  {
    term: 'Jurisdiction',
    plain:
      'The power of a particular court, commission, or authority to hear a case. Filing in the wrong place can get your case rejected or transferred.',
    category: 'Court',
  },
  {
    term: 'Legal aid',
    plain:
      'Free or subsidised legal help for people who qualify under the Legal Services Authorities Act, 1987. It can include a lawyer and court-fee help.',
    category: 'Rights',
  },
  {
    term: 'Limitation',
    plain:
      'The deadline for filing a case. Miss it and the court may refuse to hear the claim, even if you were right.',
    category: 'Court',
  },
  {
    term: 'Locus standi',
    plain:
      'The right to bring a case because you are personally affected, or because the law gives you standing. It is the “why you?” question.',
    category: 'Court',
  },
  {
    term: 'Lok Adalat',
    plain:
      'A people’s court that helps parties settle disputes by agreement. A settlement recorded there is treated as a court decree.',
    category: 'Court',
  },
  {
    term: 'Magistrate',
    plain:
      'A judicial officer who handles criminal cases, remands, bail, and some complaints. Magistrates are not the same as civil judges.',
    category: 'Court',
  },
  {
    term: 'Maintainable',
    plain:
      'Whether a case is legally proper for that court to hear. If a case is not maintainable, the court can dismiss it without deciding the merits.',
    category: 'Court',
  },
  {
    term: 'Mediation',
    plain:
      'A structured negotiation with a neutral mediator. The parties decide the outcome; the mediator does not impose one.',
    category: 'Court',
  },
  {
    term: 'Natural justice',
    plain:
      'The basic fairness rules: hear the other side, and do not be a judge in your own cause. Courts use it to review decisions.',
    category: 'Rights',
  },
  {
    term: 'Notice',
    plain:
      'A formal communication that tells the other side what you want and gives them a chance to respond. It often comes before a case.',
    category: 'Documents',
  },
  {
    term: 'Oath',
    plain:
      'A promise to tell the truth in a legal proceeding. Giving false evidence on oath can be an offence.',
    category: 'Court',
  },
  {
    term: 'Petition',
    plain:
      'A formal written request to a court. It can start a case or ask for a specific order.',
    category: 'Court',
  },
  {
    term: 'Plaintiff',
    plain:
      'The person who starts a civil case. In criminal cases, the state usually prosecutes, and the victim is the complainant.',
    category: 'Court',
  },
  {
    term: 'Plaint',
    plain:
      'The document that starts a civil suit. It sets out the facts, the claims, and the relief the plaintiff wants.',
    category: 'Documents',
  },
  {
    term: 'POSH Act',
    plain:
      'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. It requires workplaces to have an Internal Committee and a complaint process.',
    category: 'Work',
  },
  {
    term: 'Power of attorney',
    plain:
      'A document that lets someone act on your behalf for specified matters. It is not a transfer of your rights and can be limited or revoked.',
    category: 'Documents',
  },
  {
    term: 'Prima facie',
    plain:
      '“On the face of it.” A prima facie case is one that looks strong enough to proceed, before the full evidence is tested.',
    category: 'Court',
  },
  {
    term: 'Pro bono',
    plain:
      'Legal work done free or at a reduced fee, usually as a public service. It is not the same as statutory legal aid.',
    category: 'Rights',
  },
  {
    term: 'Product liability',
    plain:
      'The responsibility of a manufacturer, seller, or service provider for harm caused by a defective product or bad service. The Consumer Protection Act, 2019 covers it.',
    category: 'Consumer',
  },
  {
    term: 'Remand',
    plain:
      'Sending an accused person back into custody while the case continues, usually after a magistrate reviews the arrest.',
    category: 'Police',
  },
  {
    term: 'Res judicata',
    plain:
      'A matter already finally decided by a competent court cannot usually be litigated again between the same parties.',
    category: 'Court',
  },
  {
    term: 'Respondent',
    plain:
      'The person or organisation answering a petition or appeal. In a civil suit, this is usually the defendant.',
    category: 'Court',
  },
  {
    term: 'RTI',
    plain:
      'The Right to Information Act, 2005. It lets you ask a public authority for information, subject to exemptions and fees.',
    category: 'Rights',
  },
  {
    term: 'Security deposit',
    plain:
      'Money paid to a landlord to cover unpaid rent or damage. The refund terms should be in your written agreement; state laws vary.',
    category: 'Housing',
  },
  {
    term: 'Suo motu',
    plain:
      'An action a court or authority takes on its own, without a formal complaint from a party.',
    category: 'Court',
  },
  {
    term: 'Summons',
    plain:
      'A court order telling a person to appear, usually as a party or witness. Ignoring it can lead to penalties.',
    category: 'Court',
  },
  {
    term: 'Testimony',
    plain:
      'A witness’s statement given under oath, usually in court. It is evidence, but it is not automatically the whole truth.',
    category: 'Court',
  },
  {
    term: 'Unfair trade practice',
    plain:
      'A business practice that misleads or takes advantage of consumers, such as false claims, hidden charges, or refusing to honour a warranty.',
    category: 'Consumer',
  },
  {
    term: 'Vakalatnama',
    plain:
      'The document that authorises an advocate to appear and act for you in a case. Read what powers you are giving before signing.',
    category: 'Documents',
  },
  {
    term: 'Warrant',
    plain:
      'A written order from a court or magistrate authorising the police to do something, such as arrest a person or search a place.',
    category: 'Police',
  },
  {
    term: 'Writ',
    plain:
      'A formal order from a higher court, often used to protect fundamental rights or review an authority’s decision.',
    category: 'Rights',
  },
  {
    term: 'Zero FIR',
    plain:
      'An FIR registered at any police station, even one without jurisdiction, so the complaint is not lost. It is then transferred to the correct station.',
    category: 'Police',
  },
];

export const glossaryCategories: GlossaryCategory[] = [
  'Court',
  'Police',
  'Consumer',
  'Housing',
  'Work',
  'Rights',
  'Documents',
  'Digital',
];
