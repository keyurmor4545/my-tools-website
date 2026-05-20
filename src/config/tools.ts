export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'Text' | 'Developer' | 'Color & Code';
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
  {
    id: 'hex-to-rgb',
    name: 'Hex to RGB',
    description: 'Convert hex color codes to RGB values with live preview.',
    category: 'Color & Code',
    iconName: 'Palette',
    href: '/tools/hex-to-rgb',
  },
  {
    id: 'binary-to-text',
    name: 'Binary to Text',
    description: 'Convert binary code (0s and 1s) into readable plain text.',
    category: 'Color & Code',
    iconName: 'Cpu',
    href: '/tools/binary-to-text',
  },
];
