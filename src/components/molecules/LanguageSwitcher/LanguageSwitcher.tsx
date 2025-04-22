import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Button from '../../atoms/Button';

export function LanguageSwitcher() {
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);
  const { t } = useTranslation();
  return (
    <div className="space-x-2 flex">
      <p className='self-center mb-1'>{t('language')}</p>
      <Button className='cursor-pointer' onClick={() => changeLanguage('en')}>🇺🇸 EN</Button>
      <Button className='cursor-pointer' onClick={() => changeLanguage('es')}>🇲🇽 ES</Button>
    </div>
  );
}
