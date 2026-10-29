export interface Faq {
  q: string;
  a: string;
}

export const faqs: Record<string, Faq[]> = {
  consumer: [
    {
      q: 'Do I need a lawyer to file a consumer complaint?',
      a: 'No. The consumer commissions are designed for self-representation, the forms are simple, and e-Daakhil lets you file from home. A lawyer helps most when the amount is large or the defence is technical — but the complaint itself is a citizen\'s filing.',
    },
    {
      q: 'The seller says "no refund, only store credit". Can they do that?',
      a: 'Store credit as the only remedy is a policy, not a law. If the product is defective or the service deficient, you can insist on the statutory remedies — repair, replacement, refund, or compensation. A written complaint naming your remedy usually settles it.',
    },
    {
      q: 'How long do I have to file?',
      a: 'Generally two years from the date the cause of action arose. Some sectors add their own clocks first — card chargebacks, for instance, run on the card network\'s timeline, which is often shorter. File early and keep the trail.',
    },
    {
      q: 'What if the company simply ignores the commission\'s notice?',
      a: 'The commission proceeds ex parte and can decide on your documents alone. Winning is step one; enforcement is a separate application. Default orders are common precisely because ignoring a commission is expensive.',
    },
    {
      q: 'Can I complain about a free service or a ₹300 order?',
      a: 'Yes. There is no minimum value for a consumer complaint, and the fee for small claims is nominal (₹100 for claims up to ₹5 lakh). Whether the fight is worth the time is your call — the right exists.',
    },
  ],
  housing: [
    {
      q: 'Is an 11-month agreement valid?',
      a: 'Yes — it is a common form, partly because many states exempt shorter terms from registration. But it is weaker evidence than a registered agreement, and some states now require registration even for short terms. Check your state\'s rule before assuming.',
    },
    {
      q: 'My landlord keeps part of the deposit for "painting". Is that legal?',
      a: 'Painting for normal wear and tear is not damage, and a lump-sum "painting charge" without a bill is a deduction you can dispute in writing. What you agreed in the clause decides the margins — ask for an itemised statement with receipts.',
    },
    {
      q: 'Can the landlord enter whenever they want?',
      a: 'The agreement and basic privacy expectations require reasonable notice for entry except in emergencies. Repeated unannounced entry can be breach of quiet enjoyment — document it, and put a written request for notice on record.',
    },
    {
      q: 'The landlord is selling the flat. Do I have to move out immediately?',
      a: 'No. A sale does not end a tenancy; the buyer steps into the landlord\'s shoes and your agreement continues on its terms. Only a valid notice and the agreement\'s process end it — not a "vacate soon" WhatsApp.',
    },
    {
      q: 'Who pays for repairs — me or the landlord?',
      a: 'What the agreement says governs; where it is silent, structural repairs and major installations are ordinarily the owner\'s responsibility, and day-to-day minor upkeep the tenant\'s. Put repair requests in writing with dates either way.',
    },
  ],
  work: [
    {
      q: 'My salary is 15 days late. Is that a complaint or a "cash-flow issue"?',
      a: 'Wages due are recoverable, and delay is actionable from the contractual payday. A written demand on day one of the delay — with the offer letter and bank credits attached — is both the fastest nudge and the first exhibit if it escalates.',
    },
    {
      q: 'Can my employer hold my relieving letter because I left mid-notice?',
      a: 'A notice-period dispute is a contract question; earned wages and statutory documents are not hostages to it. Demand the FnF statement, relieving letter, and experience letter in writing, and run the labour machinery if they stall.',
    },
    {
      q: 'Is my offer letter enough proof of employment?',
      a: 'It is good evidence, but the file is better: offer letter, salary slips, bank credits, PF slips, and the resignation trail. Background verification and any forum will read the pattern, not one document.',
    },
    {
      q: 'Can I be fired without notice during probation?',
      a: 'Probation usually shortens the notice, it does not remove it — whatever the appointment letter says governs. Termination without the contractual notice is itself a claim, and "performance" needs some record to be defensible.',
    },
    {
      q: 'What is the difference between resignation and termination for my dues?',
      a: 'The dues largely overlap — salary, leave encashment, PF, gratuity where earned. What changes is the paperwork and the narrative: a documented resignation protects your relieving-letter rights and your record, which is why leaving properly is worth the paperwork.',
    },
  ],
  digital: [
    {
      q: 'I clicked a link and lost money. What is the very first thing to do?',
      a: 'Call 1930 immediately and your bank\'s fraud line — the first hour is when freezing works. Then file on cybercrime.gov.in with screenshots and the transaction ID. Speed beats everything else, including perfect paperwork.',
    },
    {
      q: 'Someone is threatening to leak my photos. Should I pay?',
      a: 'No. Payment funds the next demand. Preserve everything, do not engage further, and report — extortion is a crime, and platforms plus cybercrime cells act on it. Women also have dedicated cells and helplines for image-abuse complaints.',
    },
    {
      q: 'An app is selling my data. Is that even illegal now?',
      a: 'The DPDP Act, 2023 requires notice, purpose-limited consent, and grievance redressal. A written access/erasure request to the company\'s grievance officer, escalated to the Data Protection Board, is the machinery that exists — and sectoral rules (RBI, TRAI) add teeth for banking and telecom.',
    },
    {
      q: 'The fraudster used a fake profile with my photos. What can I do?',
      a: 'Report to the platform (that gets the profile down) and file a cybercrime complaint for impersonation (that creates the legal record). Keep screenshots with dates and URLs — platforms act faster on reports that include both.',
    },
    {
      q: 'Is a screenshot enough evidence, or do I need something more?',
      a: 'Screenshots start the case; the original messages, emails, and call records strengthen it. Do not delete the originals, export chats where the app allows it, and note dates and times — digital evidence lives or dies on preservation.',
    },
  ],
  civic: [
    {
      q: 'The police refused to register my FIR. What now?',
      a: 'A refusal to register a cognizable-offence FIR is itself reviewable: send the complaint in writing to the Superintendent of Police, and if that fails, the magistrate can direct registration under Section 175(3) BNSS. Zero FIRs also mean no station can turn you away for "wrong jurisdiction".',
    },
    {
      q: 'What can I actually ask for in an RTI application?',
      a: 'Information that exists in record — files, notings, orders, bills, samples of work. Not opinions, not "why did they do this" speculation. A precise question about a specific record gets a specific reply; a vague one gets a generic refusal.',
    },
    {
      q: 'How do I know if I qualify for free legal aid?',
      a: 'Income thresholds (varies by state), SC/ST members, women and children, persons with disability, and several other categories qualify under the Legal Services Authorities Act. Apply to your District Legal Services Authority — the test is generous, and asking costs nothing.',
    },
    {
      q: 'Do I have to answer questions at a police stop without a lawyer?',
      a: 'You must identify yourself where law requires it, and the Constitution protects you against self-incrimination. Politeness plus a written record of the stop covers most situations; for anything beyond identity, "I will answer with my advocate present" is a lawful position.',
    },
    {
      q: 'A government office lost my file. Can RTI actually help?',
      a: 'Often, yes: "provide the status and file movements of application [number] dated [date]" produces the paper trail — who holds it, since when. The reply either moves your file or becomes the evidence for a superior-office complaint.',
    },
  ],
  family: [
    {
      q: 'Can I claim maintenance without filing for divorce?',
      a: 'Yes. Section 125 BNSS maintenance is independent of matrimonial proceedings — a wife living separately for good reason, children, and indigent parents can all claim. Divorce and maintenance run on parallel tracks and can be coordinated later.',
    },
    {
      q: 'What counts as domestic violence besides hitting?',
      a: 'The DV Act covers physical, sexual, verbal and emotional abuse, and economic abuse — withholding money you are entitled to, disposing of your stridhan, preventing you from taking up a job. The pattern and the effect matter, not the visible injury.',
    },
    {
      q: 'Does mutual consent divorce require both of us to be in the same city?',
      a: 'The two motions require both parties\' statements before the court; video-conference appearance is increasingly allowed, and a power-of-attorney holder can appear in some courts with permission. Ask the specific family court — practice varies.',
    },
    {
      q: 'Who gets custody if we both want the child?',
      a: 'The child\'s welfare decides, not filing order or gender. Courts weigh stability, schooling, caregiving history, and the child\'s own view as they mature. Interim visitation is fixed early so the child\'s routine survives the case.',
    },
    {
      q: 'My in-laws are holding my jewellery and gifts. What is the fastest route?',
      a: 'Stridhan is your absolute property. A DV Act application can include recovery orders for stridhan alongside protection and residence orders — usually the fastest forum. Keep bills, photos, and transfer records of what exists.',
    },
  ],
  money: [
    {
      q: 'A recovery agent threatened to visit my office. Can they do that?',
      a: 'No — shaming you before an employer or neighbours violates RBI\'s recovery-agent guidelines. Log it, write to the bank\'s grievance cell naming the violation, and take it to the RBI Ombudsman if the bank stalls. Threats to "tell everyone you default" are evidence, not leverage.',
    },
    {
      q: 'Can I go to jail for not repaying a loan?',
      a: 'Loan default is a civil matter. Criminal law enters only where fraud is alleged and proved through a court — not on an agent\'s say-so. Threats of arrest for non-payment are misrepresentation, and they are themselves complainable.',
    },
    {
      q: 'My bank reported a loan as "settled" after full payment. Can I get it corrected?',
      a: 'Yes — this is the classic credit-report dispute: closure letter and NOC against the bureau\'s "settled" tag, disputed online with the bureau and escalated to the lender\'s grievance cell and the RBI Ombudsman. The lender must correct the source feed.',
    },
    {
      q: 'I got a SARFAESI notice. Do I lose the house in 60 days?',
      a: 'No. The 13(2) notice gives 60 days to cure or object; symbolic possession comes next, physical possession needs a magistrate\'s order, sale needs its own 30-day notice, and a DRT appeal is available within 45 days of enforcement. Every step is a window — the worst use of them is silence.',
    },
    {
      q: 'The EMI bounced once. Is my credit score ruined?',
      a: 'One bounce shows as days-past-due in the cycle it lands in, and its impact fades with subsequent clean months — scores punish patterns, not accidents. The fix is immediate: pay, confirm the bank reports the correction, and check the next report.',
    },
  ],
};

export const topicFaqList = (topicId: string): Faq[] => faqs[topicId] ?? [];
