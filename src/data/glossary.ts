export type GlossaryCategory =
  | 'Court'
  | 'Police'
  | 'Consumer'
  | 'Housing'
  | 'Work'
  | 'Rights'
  | 'Documents'
  | 'Digital'
  | 'Family'
  | 'Money';

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
  {
    term: 'Bailable offence',
    plain:
      'An offence where the accused has a right to be released on bail — the police or court grants it as of right, unlike non-bailable offences where bail is discretionary.',
    category: 'Police',
  },
  {
    term: 'Charge sheet',
    plain:
      'The final police report filed in court after investigation, listing the evidence against the accused and the offences alleged. The trial happens on the charge sheet, not on the FIR.',
    category: 'Police',
  },
  {
    term: 'Closure report',
    plain:
      'A police report saying the investigation found no case — also called a final report. The complainant can contest it, and the court can order further investigation or take cognizance anyway.',
    category: 'Police',
  },
  {
    term: 'Injunction',
    plain:
      'A court order telling someone to do, or stop doing, a specific thing — for example, to stop construction or not to publish material. Breaking it is contempt.',
    category: 'Court',
    seeAlso: 'Stay order',
  },
  {
    term: 'Stay order',
    plain:
      'An order pausing proceedings or the effect of a decision — often an appeal — so nothing is executed while the higher court examines it.',
    category: 'Court',
    seeAlso: 'Injunction',
  },
  {
    term: 'Ombudsman',
    plain:
      'A free, documents-based dispute official for a sector — India has ombudsmen for insurance, banking, and income tax. Their awards bind the company (within limits) if you accept them.',
    category: 'Consumer',
    seeAlso: 'Consumer dispute',
  },
  {
    term: 'Cheque bounce',
    plain:
      'The common name for dishonour of a cheque under Section 138 of the Negotiable Instruments Act — a criminal offence when the drawer does not pay within 15 days of a written demand notice.',
    category: 'Court',
    seeAlso: 'Notice',
  },
  {
    term: 'MACT',
    plain:
      'Motor Accidents Claims Tribunal — the special court that decides compensation claims after road accidents, against the driver, owner, or insurer.',
    category: 'Court',
  },
  {
    term: 'PIL',
    plain:
      'Public Interest Litigation — a petition filed in the higher courts for a public cause rather than a personal grievance, with relaxed standing rules.',
    category: 'Rights',
    seeAlso: 'Writ',
  },
  {
    term: 'Gratuity',
    plain:
      'A statutory lump sum an employee with five years of continuous service receives on leaving — 15 days of wages per completed year under the Payment of Gratuity Act.',
    category: 'Work',
  },
  {
    term: 'Full and final settlement',
    plain:
      'The last payroll at exit: unpaid salary, leave encashment, and reimbursements. Signing a receipt marked "full and final" can bar later claims, so never accept less than what is due silently.',
    category: 'Work',
  },
  {
    term: 'Relieving letter',
    plain:
      'The document an employer issues when you formally leave, confirming your tenure and last working day. Background verification at your next job usually requires it.',
    category: 'Work',
  },
  {
    term: 'Eviction',
    plain:
      'The legal removal of a tenant — through notice and a rent authority or court order. Changing the locks or cutting utilities is not eviction; it is an unlawful lockout.',
    category: 'Housing',
    seeAlso: 'Security deposit',
  },
  {
    term: 'Stamp duty',
    plain:
      'The state tax paid on documents like agreements and sale deeds. An under-stamped or unregistered document that requires registration can face problems when enforced in court.',
    category: 'Housing',
  },
  {
    term: 'Leave and licence',
    plain:
      'The agreement form used for most urban renting — a licence to occupy, not a lease transferring interest. States regulate it differently; many now require registration even for 11-month agreements.',
    category: 'Housing',
  },
  {
    term: 'Data fiduciary',
    plain:
      'Under the DPDP Act, 2023, the entity that decides how your personal data is processed — the company, app, or platform. You are the data principal.',
    category: 'Digital',
  },
  {
    term: 'Chargeback',
    plain:
      'A bank-led reversal of a card or UPI payment — for non-delivery or fraud — raised with your bank, independent of the seller’s own refund process.',
    category: 'Digital',
  },
  {
    term: 'Maintenance',
    plain:
      'A court-ordered allowance for a spouse, children, or parents who cannot maintain themselves — claimable while the marriage subsists, not only after divorce.',
    category: 'Family',
    seeAlso: 'Maintenance claims guide',
  },
  {
    term: 'Stridhan',
    plain:
      'The property, gifts and money that belong to a woman in her own right — before, during and after marriage. It stays hers absolutely, and its refusal back is recoverable.',
    category: 'Family',
  },
  {
    term: 'Protection order',
    plain:
      'A magistrate’s order under the DV Act forbidding the respondent from abusing, contacting, or approaching you. Breach of it is a criminal offence.',
    category: 'Family',
  },
  {
    term: 'Residence order',
    plain:
      'A DV Act order securing your right to live in the shared household — even one owned by the husband or his family — or directing alternative accommodation.',
    category: 'Family',
    seeAlso: 'Eviction',
  },
  {
    term: 'Mutual consent divorce',
    plain:
      'Divorce by joint petition where both spouses agree on the end and the terms: custody, money, articles. Two court statements with a cooling period between — waivable in settled cases.',
    category: 'Family',
  },
  {
    term: 'SARFAESI',
    plain:
      'The Act that lets banks enforce secured loans without a civil suit — through a 60-day demand notice, possession and sale, each step with its own notices and appeal rights.',
    category: 'Court',
    seeAlso: 'MACT',
  },
  {
    term: 'DRT',
    plain:
      'Debts Recovery Tribunal — the forum where a borrower appeals a bank’s enforcement action, within 45 days, on a statutory pre-deposit.',
    category: 'Court',
    seeAlso: 'SARFAESI',
  },
  {
    term: 'Credit report',
    plain:
      'The file bureaus like CIBIL keep on your loans, built from what lenders report monthly. Wrong entries are disputed with the bureau — but corrected by the lender at the source.',
    category: 'Money',
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
  'Family',
  'Money',
];
