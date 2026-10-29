export interface Template {
  id: string;
  title: string;
  topic: 'consumer' | 'housing' | 'work' | 'digital' | 'civic';
  useWhen: string;
  subject: string;
  body: string;
  tips: string[];
}

export const templates: Template[] = [
  {
    id: 'consumer-complaint',
    title: 'Consumer complaint letter',
    topic: 'consumer',
    useWhen:
      'A product is defective, a service was not delivered, or a seller has stopped responding after you paid.',
    subject: 'Complaint and request for remedy — Order [order number] dated [date]',
    body: `To,
[Seller / service provider name]
[Address]

Subject: Complaint and request for remedy — Order [order number] dated [date]

Dear [name],

I purchased [product / service] from you on [date] for ₹[amount], invoice/order number [number]. The product/service has the following problem: [describe the defect or deficiency, with dates].

I have already raised this on [date] through [call/email/chat] and received [response or no response]. I am attaching the invoice, warranty, photographs, and the communication trail.

I request one of the following remedies within 15 days:
1. Repair the product at no cost; or
2. Replace it with a working unit; or
3. Refund ₹[amount] to my account ending [last four digits].

If I do not receive a satisfactory response, I will escalate the matter to the National Consumer Helpline and, if necessary, file a complaint before the appropriate Consumer Commission under the Consumer Protection Act, 2019.

Please confirm receipt of this letter and the timeline for resolution.

Yours sincerely,
[Your name]
[Phone] · [Email]
[Address]

Enclosures: invoice, warranty, photographs, communication trail, payment proof.`,
    tips: [
      'Send it by email and keep the sent copy. If you send a physical letter, use registered post or courier with acknowledgement.',
      'Be specific about the remedy you want. “Please resolve” is harder to act on than “repair, replace, or refund”.',
      'Do not accept a replacement or settlement without reading what you are giving up. Ask whether it is full and final.',
    ],
  },
  {
    id: 'deposit-demand',
    title: 'Security deposit refund letter',
    topic: 'housing',
    useWhen:
      'You have vacated a rented home and the landlord is delaying the deposit or making deductions without receipts.',
    subject: 'Refund of security deposit — [address], tenancy ended [date]',
    body: `To,
[Landlord name]
[Address]

Subject: Refund of security deposit — [address], tenancy ended [date]

Dear [name],

I vacated the premises at [address] on [date] after giving the notice required by our agreement dated [date]. The flat was handed over on [date] with [keys, meter readings, inventory] and I have photographs and a handover note.

As per clause [clause number] of the agreement, the security deposit of ₹[amount] was to be refunded within [number] days of handover. I have not received the refund or a written statement of deductions.

Please send me, within 15 days:
1. The full deposit of ₹[amount]; or
2. An itemised statement of every deduction, with the supporting bills or receipts, and the balance amount.

Normal wear and tear is not damage. If you are deducting for repairs, please identify the specific damage, the date it was caused, and the cost.

If the refund is not received within 15 days, I will escalate the matter through [mediation / the rent authority, where applicable / the civil court] and claim the deposit along with interest and costs.

Yours sincerely,
[Your name]
[Phone] · [Email]
[Address]

Enclosures: rent agreement, handover note, photographs/video, meter readings, payment proof for the deposit, notice to vacate.`,
    tips: [
      'There is no single national law that fixes a deposit cap or refund deadline. Your written agreement and the state rent law that applies to your building are the starting point.',
      'Document the flat before you hand over the keys: a dated video walkthrough is worth more than a memory.',
      'Ask for receipts, not estimates. “Painting charges” without a bill is a deduction you can dispute.',
    ],
  },
  {
    id: 'salary-delay',
    title: 'Salary delay email',
    topic: 'work',
    useWhen:
      'Your salary, full-and-final settlement, or approved reimbursement is overdue and informal reminders have not worked.',
    subject: 'Overdue salary for [month] — employee ID [number]',
    body: `To,
[HR / manager / accounts]
[Company name]

Cc: [relevant senior manager, if appropriate]

Subject: Overdue salary for [month] — employee ID [number]

Dear [name],

My salary for [month] was due on [date] under my appointment letter dated [date]. As of today, [amount] remains unpaid. My employee ID is [number] and my bank account ends in [last four digits].

I have raised this verbally on [dates] and by [email/chat] on [date], but I have not received a payment date or a written explanation.

Please confirm by [date, e.g. three working days]:
1. The exact amount due;
2. The date it will be credited; and
3. The reason for the delay, if any.

I am continuing to perform my duties in good faith. If the payment is not made by the date above, I will be forced to escalate the matter to the labour authority / appropriate forum and to seek my unpaid dues with interest and costs.

I would prefer to resolve this internally. Please treat this as a formal request for payment.

Yours sincerely,
[Your name]
[Employee ID]
[Phone] · [Email]

Enclosures: appointment letter, salary slips for the last three months, bank statement showing the missing credit, relevant emails/chats.`,
    tips: [
      'Which law applies depends on your role, wage ceiling, state, and establishment. The Payment of Wages Act, 1936, state Shops and Establishments Acts, and the labour department are the usual routes; a local advocate can confirm what fits your facts.',
      'Keep the tone factual. Insults and threats weaken a paper trail that may later be read by a labour officer or court.',
      'If you have left the job, ask separately for the full-and-final settlement, experience letter, and Form 16. Do not let one dispute hide the others.',
    ],
  },
  {
    id: 'rti-application',
    title: 'RTI application',
    topic: 'civic',
    useWhen:
      'You want records, decisions, expenses, or progress reports from a government department or public authority.',
    subject: 'Request for information under the Right to Information Act, 2005',
    body: `To,
The Central Public Information Officer / State Public Information Officer
[Public authority name]
[Address]

Subject: Request for information under the Right to Information Act, 2005

1. Full name of applicant: [name]
2. Address: [address]
3. Contact: [phone] · [email]
4. Particulars of information requested:
   [Ask specific, dated questions. For example: “Copies of all inspection reports for [site] between [date] and [date]”; “The sanctioned budget and expenditure for [scheme] in [year]”; “The file noting on [decision] dated [date]”.]

5. Period to which the information relates: [dates]
6. Whether the applicant is below the poverty line: [Yes/No — attach proof if Yes]
7. Fee: ₹[amount] paid by [cash / demand draft / postal order / online receipt number].

I request that the information be provided in [printed copies / electronic form / inspection of records]. If any part is exempt, please provide the reasons and the non-exempt portions, as required by the Act.

If the information is not provided within the time limit, I will file a first appeal and, if necessary, a second appeal before the Information Commission.

Place: [city]
Date: [date]

Signature: [name]`,
    tips: [
      'Ask for records, not opinions. “Please explain why” is weaker than “Please provide the file noting and the approval letter”.',
      'You do not have to give a reason for wanting the information. Keep the request specific and dated.',
      'The central fee is ₹10, but state rules and copying charges vary. Keep the receipt; it is your proof of filing.',
    ],
  },
  {
    id: 'fir-complaint',
    title: 'Written FIR complaint',
    topic: 'civic',
    useWhen:
      'You need to report a cognizable offence and want a written record that the police station received your complaint.',
    subject: 'Written complaint for registration of FIR — [offence] on [date]',
    body: `To,
The Station House Officer
[Police station name]
[Address]

Subject: Written complaint for registration of FIR — [offence] on [date]

Respected Sir/Madam,

I, [name], son/daughter of [parent name], resident of [address], wish to report the following incident:

1. Date and time of incident: [date, time]
2. Place of incident: [full address / landmark]
3. Persons involved: [names/descriptions, if known]
4. What happened: [a clear chronological account — who did what, when, and how]
5. Property involved / injury caused: [description and approximate value]
6. Witnesses: [names and contact details, if any]
7. Evidence in my possession: [CCTV location, photographs, messages, documents, medical records]

I request that an FIR be registered under the appropriate provisions of law and that I be given a free copy of the FIR. If the police station is not the correct jurisdiction, please register a Zero FIR and transfer it to the competent station.

Please acknowledge receipt of this complaint on a copy of this letter.

Yours faithfully,
[Name]
[Phone] · [Email]
[Address]
Date: [date]

Enclosures: [list documents, photos, medical records, etc.]`,
    tips: [
      'Stick to what you saw, heard, or experienced. Do not fill gaps with guesses; the police can investigate those.',
      'Read the FIR before signing. Ask for corrections to be made and initialled. Never sign a blank page.',
      'You are entitled to a free copy of the FIR. If the station refuses to register one, ask for the refusal in writing and escalate to the Superintendent of Police; you can also approach the Magistrate under the BNSS, 2023.',
    ],
  },
  {
    id: 'cyber-fraud',
    title: 'Cyber fraud complaint checklist',
    topic: 'digital',
    useWhen:
      'Money has been taken through UPI, a card, a fake job, an investment scam, or a phishing link.',
    subject: 'Cyber fraud complaint — transaction [ID] on [date]',
    body: `CYBER FRAUD — FIRST-HOUR CHECKLIST

1. Call 1930 (National Cyber Crime Helpline) immediately. Give the date, amount, transaction ID/UTR, bank, and the UPI ID or account number you paid.
2. Call your bank’s fraud line. Ask them to block the card/UPI handle, freeze the beneficiary account if possible, and register a dispute. Note the complaint/reference number.
3. File a complaint at https://cybercrime.gov.in. Upload:
   - screenshots of the transaction and the chat;
   - the UPI ID, phone number, email, or website used by the fraudster;
   - bank statement showing the debit;
   - any call recording or voice message.
4. Send a written email to your bank with the subject “Unauthorised/fraudulent transaction — [date] — [amount] — [UTR]”. Attach the police complaint acknowledgement.
5. Preserve everything. Do not delete chats, reset the phone, or uninstall the app. Take screenshots with the date and time visible.
6. Do not pay any “recovery agent” or click a “refund” link sent by someone who contacted you after the fraud.

Complaint text:

I, [name], report a fraudulent transaction of ₹[amount] on [date] at [time]. The money was transferred from my [bank] account ending [last four digits] via [UPI/card/net banking] to [beneficiary UPI/account]. The fraudster contacted me through [phone/email/website] and used [describe the method]. I have filed a complaint on cybercrime.gov.in with acknowledgement number [number] and informed my bank on [date]. I request that the transaction be investigated and the amount be frozen/recovered where possible.

Name:
Phone:
Email:
Address:
Date:`,
    tips: [
      'Speed matters more than perfect wording. A report in the first hour gives the bank a better chance of freezing the money before it moves again.',
      'Use the official portal and the 1930 helpline. Screenshots of a “recovery agency” promising your money back are usually a second scam.',
      'If your bank does not resolve the dispute, ask for the written complaint number and escalate under the RBI’s Integrated Ombudsman Scheme.',
    ],
  },
  {
    id: 'cheque-notice',
    title: 'Cheque bounce demand notice',
    topic: 'civic',
    useWhen:
      'A cheque you received was dishonoured and you must demand payment within 30 days of the bank memo — the notice that starts the Section 138 process.',
    subject: 'Demand notice for payment of cheque no. [number] dated [date] for ₹[amount]',
    body: `Registered Post / Speed Post with Acknowledgment Due

To,
[Drawer name]
[Address]

Subject: Demand for payment of ₹[amount] against dishonoured cheque no. [number] dated [date]

Sir/Madam,

You issued cheque no. [number] dated [date] for ₹[amount], drawn on [bank], [branch], towards [describe the debt or liability — invoice no., agreement, loan]. The cheque was presented to my bank within its validity period and was dishonoured on [date] with the bank's memo stating "[reason — e.g. insufficient funds]". A copy of the cheque and the bank memo is enclosed.

I hereby call upon you to pay the said amount of ₹[amount] to me within fifteen (15) days of receipt of this notice, failing which I shall be constrained to initiate proceedings under Section 138 of the Negotiable Instruments Act, 1881, along with such other civil proceedings for recovery as advised, at your risk as to costs and consequences.

This notice is issued without prejudice to all other rights and remedies available to me.

Encl: (1) Copy of cheque; (2) Bank return memo dated [date]; (3) Copy of [invoice/agreement].

Yours sincerely,
[Your name]
[Address]
[Phone]`,
    tips: [
      'The 30-day clock runs from the date you received the bank memo, not the date of the bounce. Send the notice with proof of dispatch and keep every receipt.',
      'The notice must demand the cheque amount within 15 days of receipt — partial payments and fresh cheques do not stop the clock unless you say so in writing.',
      'For significant amounts, have a lawyer draft or vet this notice; it is the document the entire case rests on.',
    ],
  },
  {
    id: 'insurance-grievance',
    title: 'Insurance claim grievance letter',
    topic: 'consumer',
    useWhen:
      'A claim was rejected, delayed, or partly paid, and you are escalating from the insurer to the IRDAI portal or the Insurance Ombudsman.',
    subject: 'Grievance against repudiation of claim no. [claim number] — policy no. [policy number]',
    body: `To,
[Grievance Redressal Officer]
[Insurer name and address]

Subject: Grievance against repudiation of claim no. [claim number] under policy no. [policy number]

Dear Sir/Madam,

I hold [health/life/motor] policy no. [number] effective from [date]. I lodged claim no. [number] on [date] for ₹[amount] arising from [hospitalisation/loss/event of date]. By letter dated [date] the claim was repudiated citing "[reason as stated]".

I dispute the repudiation for the following reasons:
1. [Answer reason 1 — e.g., the waiting period of 36 months expired on [date], as per the policy schedule attached.]
2. [Answer reason 2 — e.g., the proposal form's question no. [x] did not seek disclosure of the condition cited; the condition was first diagnosed on [date], after inception.]
3. [Answer reason 3 — e.g., the documents now enclosed complete the requirements stated in your letter of [date].]

I request reassessment and payment of ₹[amount] within 15 days. Failing satisfactory resolution, I will register the grievance on the IRDAI Bima Bharosa portal and approach the Insurance Ombudsman, and I reserve my rights before the Consumer Commission.

Encl: (1) Policy and schedule; (2) Repudiation letter; (3) Claim form and [medical bills/discharge summary/FIR]; (4) [proposal form].

Yours sincerely,
[Name]
[Policy no.] [Mobile] [Email] [Address]`,
    tips: [
      'Demand the repudiation letter before drafting — every paragraph of your reply should answer one stated reason.',
      'Never accept a part payment marked "full and final"; accept only "without prejudice to my claim for the balance".',
      'One ladder at a time, with numbers: insurer ticket → Bima Bharosa registration → Ombudsman. Keep them all in one file.',
    ],
  },
  {
    id: 'posh-complaint',
    title: 'POSH complaint to the Internal Committee',
    topic: 'work',
    useWhen:
      'You are filing a written complaint of sexual harassment with your workplace Internal Committee (or the Local Committee) under the POSH Act, 2013.',
    subject: 'Complaint under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
    body: `To,
The Chairperson / Presiding Officer,
Internal Committee, [Company name and address]

Subject: Complaint of sexual harassment under the POSH Act, 2013

Dear Sir/Madam,

I, [name], [designation], am employed at [office/location] since [year]. I submit this complaint against [respondent name, designation, department] under Section 9 of the POSH Act, 2013.

Facts:
1. On [date] at about [time], at [place], [state what was said or done, in plain and factual words].
2. On [date], [state the second incident, if any, including messages — quote them].
3. Witnesses present: [names/roles, if any].
4. I responded by [state what you did — objected, moved away, reported to X on date].
5. Evidence enclosed: [chats, emails, call records, screenshots with dates visible].

Effect on me: [state in one or two sentences — including any ongoing exposure to the respondent at work.]

Interim reliefs requested during the inquiry:
1. That the respondent be restrained from supervising, reviewing, or contacting me in connection with my work; or that either of us be transferred.
2. [If needed] Grant of up to 60 days of paid leave under the Act.

I state that this complaint is true to my knowledge and belief. I request a dated acknowledgement of this complaint, confidentiality of these proceedings under Section 16, and that this inquiry be completed within the statutory period of 90 days.

Name:
Designation and department:
Date:
Enclosures: [list]`,
    tips: [
      'Write facts, not conclusions: what was said or done, when, where, and who heard or saw it. The committee builds the inquiry from your record.',
      'Ask for interim relief in the complaint itself — a respondent restrained from supervising you is the protection the Act already provides.',
      'Keep the statutory clocks in mind: file within 3 months (extendable by 3), the inquiry runs 90 days, and confidentiality is your statutory right.',
    ],
  },
  {
    id: 'dpdp-request',
    title: 'Data correction and erasure request',
    topic: 'digital',
    useWhen:
      'You want a company to correct, share, or erase your personal data, or to confirm what it holds — rights under the DPDP Act, 2023.',
    subject: 'Request under the Digital Personal Data Protection Act, 2023 — account [customer ID / registered email]',
    body: `To,
The Grievance Officer / Data Protection Officer
[Company name and address]

Subject: Request for access, correction and erasure of personal data under the DPDP Act, 2023

Dear Sir/Madam,

I am [name], a user of your services registered under [email/phone/customer ID]. Under the Digital Personal Data Protection Act, 2023, I request the following:

1. Access: a summary of the personal data you hold about me, the purposes of processing, and the entities with whom it has been shared, along with the identities of such entities.

2. Correction: the following data is inaccurate/incomplete and requires correction —
   [field] currently recorded as "[value]" should be "[correct value]".

3. Erasure: I request erasure of the following data, as the purpose for which it was collected has been served and no legal obligation requires its retention —
   [describe data: e.g., my profile and behavioural data associated with the account I closed on [date]; marketing preferences and analytics profiles built from my usage of [app]].

I note that records required to be retained under law (tax, KYC, or transactional records mandated by a regulator) may be retained per such obligations; this request concerns data outside those requirements.

Please respond to this grievance within [30] days through [email]. If I do not receive a satisfactory response, I will take this grievance to the Data Protection Board of India, and reserve my rights under the Act and applicable sectoral regulations.

Yours sincerely,
[Name]
[Registered email/phone] [Date]`,
    tips: [
      'One request per company, three asks at most. A scattershot "delete everything" demand invites a blanket refusal.',
      'Acknowledge lawful retention — showing you know the difference between KYC records and marketing profiles makes the request hard to dismiss.',
      'Send it to the published grievance officer and keep the sent copy; unanswered grievances are what the Data Protection Board exists for.',
    ],
  },
  {
    id: 'rent-receipt',
    title: 'Monthly rent receipt',
    topic: 'housing',
    useWhen:
      'Every month you pay rent — for your landlord to sign, and for your HRA exemption, records, and any future dispute.',
    subject: 'Rent receipt — [Month Year]',
    body: `RECEIPT

Received a sum of ₹[amount] ([amount in words] only) from [tenant name], towards rent of the premises at [full flat address], for the month of [Month Year].

Date of payment: [date]
Mode of payment: [cash / UPI to [UPI ID] / bank transfer to A/c ending [last four digits]]
Rent for the month: ₹[amount]
[maintenance charges included: ₹[amount] / not included]

Tenant PAN: [PAN, if rent exceeds ₹2,000 per month or as required]
Landlord PAN: [PAN]

_____________________
[Landlord name]
Landlord
Date: [date] [Place: city]`,
    tips: [
      'Take the signature at the time of each payment, not in a batch at year-end — backdated receipts are worth little in a dispute.',
      'For HRA exemption above ₹3,000 per month (₹1 lakh per year), the landlord’s PAN must be reported to your employer; ask early, not in March.',
      'Match every receipt to a payment record — UPI reference or bank entry — so the two corroborate each other.',
    ],
  },
];

export const templateMap = Object.fromEntries(templates.map((template) => [template.id, template]));
