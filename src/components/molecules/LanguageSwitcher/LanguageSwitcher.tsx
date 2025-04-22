import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);
  const { t } = useTranslation();
  return (
    <div className="space-x-2 flex">
      <p>{t('language')}</p>
      <button onClick={() => changeLanguage('en')}>🇺🇸 EN</button>
      <button onClick={() => changeLanguage('es')}>🇲🇽 ES</button>
    </div>
  );
}
