import React, { type FC } from 'react'
import { classNames } from 'shared/lib/class-names/class-names'
import i18n from 'i18next'
import Button, { ThemeButton } from 'shared/ui/button/ui/button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t } = useTranslation()
    const toggle = () => {
        const newLanguage = i18n.language === 'ru' ? 'en' : 'ru'
        i18n.changeLanguage(newLanguage).then(() => {
            console.log(`Switched to language: ${newLanguage}`)
    })
    }
    return (
      <div>
            <Button
              theme={ThemeButton.CLEAR}
              className={classNames('', {}, [className])}
              onClick={toggle}>{t('Язык')}
          </Button>
        </div>
    );
}

export default LangSwitcher
