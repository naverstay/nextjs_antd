import Head from 'next/head'
import {ConfigProvider} from 'antd';
import {ReactNode, useEffect} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import {usePathname} from 'next/navigation'
import theme from "@/theme/themeConfig";

export default function Layout({children}: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'})
  }, [pathname])

  return (
    <ConfigProvider theme={theme}>
      <Head>
        <title>{{title: 'page title'}}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta name="description" content={'page description'}/>

        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
      </Head>
      <div className="min-h-[100vh] flex flex-col relative">
        <Header/>
        <main className="min-h-full flex items-center py-6 flex flex-col smooth-scroll mx-auto grow w-[100%]"
              id="layout">
          {children}
        </main>
        <Footer/>
      </div>
    </ConfigProvider>
  )
}
