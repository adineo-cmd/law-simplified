import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { glossary } from '../data/glossary';
import { templates } from '../data/templates';
import { topics } from '../data/topics';

const slug = (term: string) => term.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const GET: APIRoute = async () => {
  const guides = await getCollection('guides');
  const sorted = [...guides].sort((a, b) => a.data.order - b.data.order);

  const documents = [
    ...sorted.map((guide) => ({
      kind: 'Guide',
      title: guide.data.title,
      description: guide.data.dek,
      url: `/guides/${guide.id}/`,
      keywords: [
        guide.data.shortVersion,
        ...guide.data.tags,
        ...guide.data.pocket,
        guide.data.topic,
      ].join(' '),
    })),
    ...glossary.map((term) => ({
      kind: 'Term',
      title: term.term,
      description: term.plain,
      url: `/glossary#term-${slug(term.term)}`,
      keywords: `${term.category} ${term.plain}`,
    })),
    ...templates.map((template) => ({
      kind: 'Template',
      title: template.title,
      description: template.useWhen,
      url: `/toolkit#${template.id}`,
      keywords: `${template.topic} ${template.subject} ${template.tips.join(' ')}`,
    })),
    {
      kind: 'Page',
      title: 'All guides',
      description: 'Every plain-English guide in the field guide, filterable by topic and keyword.',
      url: '/guides',
      keywords: 'guides index all topics',
    },
    {
      kind: 'Page',
      title: 'Topics',
      description: 'Browse the guide by situation: consumer, housing, work, digital, civic.',
      url: '/topics',
      keywords: topics.map((topic) => `${topic.name} ${topic.description}`).join(' '),
    },
    {
      kind: 'Page',
      title: 'The toolkit',
      description: 'Copy-ready letters and complaints for consumers, tenants, workers, and citizens.',
      url: '/toolkit',
      keywords: 'templates letters complaint rti fir refund deposit salary cyber',
    },
    {
      kind: 'Page',
      title: 'Glossary',
      description: 'A plain-English dictionary of Indian legal terms.',
      url: '/glossary',
      keywords: 'dictionary terms legal meaning',
    },
    {
      kind: 'Page',
      title: 'About Law, Simplified.',
      description: 'Who the guide is for, how it is written, and what it is not.',
      url: '/about',
      keywords: 'about editorial principles methodology',
    },
    {
      kind: 'Page',
      title: 'Disclaimer',
      description: 'General information, not legal advice. The full disclaimer.',
      url: '/disclaimer',
      keywords: 'disclaimer legal advice lawyer client',
    },
  ];

  return new Response(JSON.stringify({ documents }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
