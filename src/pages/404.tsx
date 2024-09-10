import { useRouter } from 'next/router'
import ErrorsContent from '@/components/ErrorsContent/ErrorsContent'
import Head from 'next/head'

export default function Page404() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Error 404</title>
      </Head>
      <ErrorsContent
        title="404 – страница не найдена"
        action={() => router.push('/')}
      />
    </>
  )
}
