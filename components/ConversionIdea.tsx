import { useTranslation } from 'next-i18next';
import { languageOptions, useLanguage } from './LanguageManager';

interface ConversionIdeaProps {
  onSelect: (prompt: string) => void;
}
export default function ConversionIdea({ onSelect }: ConversionIdeaProps) {
  const { t } = useTranslation();
  const { selectedLanguage } = useLanguage();
  const converSationIdeas: { key: string; title: string; prompt: string }[] = [
    {
      key: 'conversation.Passport',
      title: t('conversation.Passport.title'),
      prompt: t('conversation.Passport.prompt'),
    },
    {
      key: 'conversation.Address',
      title: t('conversation.Address.title'),
      prompt: t('conversation.Address.prompt'),
    },
    {
      key: 'conversation.Permit',
      title: t('conversation.Permit.title'),
      prompt: t('conversation.Permit.prompt', {
        language: languageOptions[selectedLanguage],
      }),
    },
    {
      key: 'conversation.Taxes',
      title: t('conversation.Taxes.title'),
      prompt: t('conversation.Taxes.prompt'),
    },
  ];

  return (
    <div className="xxs:mt-10 md:mt-0 w-full overflow-x-auto justify-center xxs:hidden md:flex">
      {converSationIdeas.map(idea => (
        <button
          className="bg-[#009934] border-2 border-[#000000] mr-3 px-3 py-1 last:mr-0 text-black rounded"
          key={idea.key}
          onClick={() => onSelect(idea.prompt)}
          style={{ color: '#ffffff' }} // Set title text color to red
        >
          {idea.title}
        </button>
      ))}
    </div>
  );
}
