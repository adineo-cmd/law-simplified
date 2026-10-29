export type TopicId = 'consumer' | 'housing' | 'work' | 'digital' | 'civic' | 'family' | 'money';

export interface Topic {
  id: TopicId;
  name: string;
  short: string;
  description: string;
  color: string;
  wash: string;
  icon: 'bag' | 'home' | 'briefcase' | 'signal' | 'flag' | 'heart' | 'coins';
}

export const topics: Topic[] = [
  {
    id: 'consumer',
    name: 'Consumer',
    short: 'Refunds, repairs, bad service',
    description:
      'When you paid for something and it did not work, did not arrive, or was not what was promised.',
    color: '#1F3CFF',
    wash: '#E7E9FF',
    icon: 'bag',
  },
  {
    id: 'housing',
    name: 'Housing',
    short: 'Rent, deposits, landlords',
    description:
      'The agreement, the deposit, the deductions, and the moment your landlord stops replying.',
    color: '#E5482F',
    wash: '#FFE5DE',
    icon: 'home',
  },
  {
    id: 'work',
    name: 'Work',
    short: 'Wages, notice, workplace rights',
    description:
      'Late salaries, unpaid dues, unsafe workplaces, and the paper trail that makes a complaint possible.',
    color: '#1F6B4A',
    wash: '#E0F0E7',
    icon: 'briefcase',
  },
  {
    id: 'digital',
    name: 'Digital',
    short: 'Fraud, accounts, online harm',
    description:
      'The first hour after a scam, the evidence to preserve, and the complaint that gets a number.',
    color: '#7A3FD1',
    wash: '#EFE4FF',
    icon: 'signal',
  },
  {
    id: 'civic',
    name: 'Civic',
    short: 'Police, RTI, legal aid',
    description:
      'The state is supposed to answer. Here is how to ask, complain, and get a lawyer when you cannot afford one.',
    color: '#B36B00',
    wash: '#FFF0CC',
    icon: 'flag',
  },
  {
    id: 'family',
    name: 'Family',
    short: 'Marriage, maintenance, safety at home',
    description:
      'When home is the problem: maintenance, protection orders, divorce, and the money the law says a household owes its own.',
    color: '#C2417A',
    wash: '#FBE3EE',
    icon: 'heart',
  },
  {
    id: 'money',
    name: 'Money & Debt',
    short: 'Loans, recovery agents, credit reports',
    description:
      'The loan you took, the agents who call, the credit score that follows you — and the notices that come before a recovery.',
    color: '#0E7490',
    wash: '#DFF3F7',
    icon: 'coins',
  },
];

export const topicMap = Object.fromEntries(topics.map((topic) => [topic.id, topic])) as Record<
  TopicId,
  Topic
>;

export const topicIds = topics.map((topic) => topic.id);
