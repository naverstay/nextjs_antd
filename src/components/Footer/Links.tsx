import clsx from 'clsx'
import Link from 'next/link'

import classes from './style.module.css'

interface Props {
  isDark?: boolean
}

export const HelperLinks = ({isDark = false}: Props) => (
  <nav className={clsx(classes.primaryNavigationBlock, classes.id_help)}>
    <Link href="/about-us" scroll={false}>
      О бренде
    </Link>
    <Link href="/faq" scroll={false}>
      Помощь
    </Link>
    <Link href="/legit" scroll={false}>
      Проверка оригинальности
    </Link>
  </nav>
)

export const OtherLinks = ({isDark = false}: Props) => (
  <nav
    className={clsx(classes.secondaryNavigationBlock, classes.id_links)}
    id="links"
  >
    <Link href="/journal/privacy-policy" scroll={false}>
      Пользовательское соглашение
    </Link>
    <Link href="/journal/terms-of-return" scroll={false}>
      Условия возврата
    </Link>
    <Link href="/journal/payment-methods" scroll={false}>
      Контактная информация
    </Link>
  </nav>
)
