import {NextPageContext} from 'next'
import ErrorsContent from "@/components/ErrorsContent/ErrorsContent";

interface Props {
  statusCode?: number
}

function Error({statusCode}: Props) {
  if (statusCode) {
    console.log('statusCode', statusCode)
  }

  return (
    <ErrorsContent
      title="Сервис временно недоступен"
      action={() => window.location.reload()}
    />
  )
}

Error.getInitialProps = async (contextData: NextPageContext) => {
  const {res, err} = contextData
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return {statusCode}
}

export default Error
