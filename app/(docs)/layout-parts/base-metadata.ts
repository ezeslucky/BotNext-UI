import { Metadata } from 'next';

interface BaseMetadataProps {
  title?: string;
  description?: string;
}
export function baseMetadata({ title, description }: BaseMetadataProps): Metadata {
  return {
    title: `${title} Luniva UI -ezeslucky Jain`,
    description: `Luniva UI: ${description}`,
    authors: [{ name: 'ezeslucky Jain' }, { url: 'https://ezeslucky.us/', name: 'ezeslucky' }],
  };
}
