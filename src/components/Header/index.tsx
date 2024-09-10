import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import Container from "@/components/Container/Container";
import {Button, Dropdown, Flex, Input, MenuProps} from 'antd';
import SvgSearch from "@/assets/icons/Search";
import classes from './style.module.css'
import SvgChevronDown from "@/assets/icons/ChevronDown";
import {useMemo, useState} from "react";
import {MenuPropsItems} from "@/types";

interface MainHeaderProps {
  className?: string
}

const MainHeader = ({className}: MainHeaderProps) => {
  const [currency, setCurrency] = useState('1')
  const [lang, setLang] = useState('1')
  const [menu, setMenu] = useState('1')

  const currencyItems: MenuPropsItems[] = [
    {
      label: 'RUB',
      key: '1',
    },
    {
      label: 'USD',
      key: '2',
    },
  ];

  const menuItems: MenuPropsItems[] = [
    {
      label: 'Поддержка',
      key: '1',
    },
    {
      label: 'FAQ',
      key: '2',
    },
  ];

  const langItems: MenuPropsItems[] = [
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
        <Flex gap="50px" justify={"space-between"} align={"center"} className={classes.headerWrapper}>
          <Link href={'/'} className={classes.headerLogo}>
            <Image
              src={'/logo.svg'}
              width="118"
              height="24"
              alt="brand logo"
              priority
              sizes="100vw"
            />
          </Link>

          <div className={classes.headerSearch}>
            <Input size="middle"
                   placeholder="Поиск игр и приложений..."
                   prefix={<span className={classes.headerSearchIcon}><SvgSearch/></span>}/>
          </div>

          <nav className={classes.headerNav}>
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

            <Button className={classes.headerNavBtn}>
              <span className={classes.btnText}>Вход</span>
            </Button>
            <Button className={classes.headerNavBtn} type="primary">
              <span className={classes.btnText}>Регистрация</span>
            </Button>
          </nav>
        </Flex>
      </Container>
    </header>
  )
}

export default MainHeader
