import { Metadata } from 'next';

interface BaseMetadataProps {
  title?: string;
  description?: string;
}
export function baseMetadata({ title, description }: BaseMetadataProps): Metadata {
  return {
    title: `${title} BotNext UI -ezeslucky Jain`,
    description: `BotNext UI: ${description}`,
    authors: [{ name: 'ezeslucky Jain' }, { url: 'https://ezeslucky.us/', name: 'ezeslucky' }],
  };
}
