import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import Container from "@/components/Container/Container";
import {Button, Dropdown, Flex, Input, MenuProps} from 'antd';
import SvgSearch from "@/assets/icons/Search";
import classes from './style.module.css'
import SvgChevronDown from "@/assets/icons/ChevronDown";
import {useMemo, useState} from "react";

interface MainHeaderProps {
  className?: string
}

interface Props extends MainHeaderProps {
  onLinkClick?: () => void
}

const MainHeader = ({className}: MainHeaderProps) => {
  const [currency, setCurrency] = useState('1')
  const [lang, setLang] = useState('1')
  const [menu, setMenu] = useState('1')

  const currencyItems: MenuProps['items'] = [
    {
      label: 'RUB',
      key: '1',
    },
    {
      label: 'USD',
      key: '2',
    },
  ];

  const menuItems: MenuProps['items'] = [
    {
      label: 'Поддержка',
      key: '1',
    },
    {
      label: 'FAQ',
      key: '2',
    },
  ];

  const langItems: MenuProps['items'] = [
    {
      label: 'Русский',
      key: '1',
    },
    {
      label: 'English',
      key: '2',
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setMenu(e.key);
  };

  const handleLangClick: MenuProps['onClick'] = (e) => {
    setLang(e.key);
  };

  const handleCurrencyClick: MenuProps['onClick'] = (e) => {
    setCurrency(e.key);
  };

  const langMenuProps = {
    items: langItems,
    onClick: handleLangClick,
  };

  const currencyMenuProps = {
    items: currencyItems,
    onClick: handleCurrencyClick,
  };

  const helpMenuProps = {
    items: menuItems,
    onClick: handleMenuClick,
  };

  const activeMenu = useMemo(() => {
    return menuItems?.find(f => f.key === menu)?.label
  }, [menu])

  const activeLang = useMemo(() => {
    return langItems?.find(f => f.key === lang)?.label
  }, [lang])

  const activeCurrency = useMemo(() => {
    return currencyItems?.find(f => f.key === currency)?.label
  }, [currency])

  return (
    <header className={clsx(classes.header, className)}>
      <Container>
        <Flex gap="50px" justify={"space-between"} className={classes.headerWrapper}>
          <Link href={'/'} className={"flex items-center cursor-pointer"}>
            <Image
              src={'/logo.svg'}
              width="0"
              height="0"
              alt="brand logo"
              className="flex-shrink-0 w-[118px]"
              priority
              sizes="100vw"
            />
          </Link>

          <Input size="middle"
                 rootClassName={"w-[384px]"}
                 placeholder="Поиск игр и приложений..."
                 prefix={<span className={"text-lg text-text-icon pr-2"}><SvgSearch/></span>}/>

          <nav className="flex justify-end gap-1 flex-1">
            <Dropdown menu={helpMenuProps}>
              <Button type={"text"}>
                <span className={classes.btnText}>{activeMenu}</span>
                <span className={classes.btnIcon}><SvgChevronDown/></span>
              </Button>
            </Dropdown>
            <Dropdown menu={langMenuProps}>
              <Button type={"text"}>
                <span className={classes.btnText}>{activeLang}</span>
                <span className={classes.btnIcon}><SvgChevronDown/></span>
              </Button>
            </Dropdown>
            <Dropdown menu={currencyMenuProps}>
              <Button type={"text"}>
                <span className={classes.btnText}>{activeCurrency}</span>
                <span className={classes.btnIcon}><SvgChevronDown/></span>
              </Button>
            </Dropdown>

            <Button className={"ml-1"}>
              <span className={classes.btnText}>Вход</span>
            </Button>
            <Button className={"ml-1"} type="primary">
              <span className={classes.btnText}>Регистрация</span>
            </Button>
          </nav>
        </Flex>
      </Container>
    </header>
  )
}

export default MainHeader
