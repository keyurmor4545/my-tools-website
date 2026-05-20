export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'Text' | 'Developer';
  iconName: string;
  href: string;
}

export const tools: Tool[] = [
  {
    id: 'text-case-converter',
    name: 'Text Case Converter',
    description: 'Convert text between upper, lower, title, and camel case.',
    category: 'Text',
    iconName: 'CaseSensitive',
    href: '/tools/text-case-converter',
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, and sentences in your text.',
    category: 'Text',
    iconName: 'Hash',
    href: '/tools/word-counter',
  },
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder',
    description: 'Encode and decode strings to and from Base64 format.',
    category: 'Developer',
    iconName: 'Binary',
    href: '/tools/base64-encoder',
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Prettify and validate your JSON data.',
    category: 'Developer',
    iconName: 'Braces',
    href: '/tools/json-formatter',
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder',
    description: 'Safely encode and decode URLs for web use.',
    category: 'Developer',
    iconName: 'Link',
    href: '/tools/url-encoder',
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum',
    description: 'Generate placeholder text for your designs.',
    category: 'Text',
    iconName: 'Type',
    href: '/tools/lorem-ipsum',
  },
];
