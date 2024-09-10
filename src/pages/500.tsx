import ErrorsContent from '@/components/ErrorsContent/ErrorsContent'
import Head from 'next/head'

export default function Page500() {
  return (
    <>
      <Head>
        <title>Error 500</title>
      </Head>
      <ErrorsContent
        title="Сервис временно недоступен"
        action={() => window.location.reload()}
      />
    </>
  )
}
