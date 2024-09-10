import clsx from 'clsx'

export type ErrorsContentProps = {
  title: string;
  action?: () => void;
}

export default function ErrorsContent(props: ErrorsContentProps) {
  const {title, action} = props
  return (
    <div
      className={clsx('mx-auto max-w-[1440px] w-full lg:px-16 px-4 md:py-0 py-15 grow flex flex-col justify-center items-center')}>
      <div
        className={clsx('grow  w-full flex flex-col justify-center items-center border border-[1px] border-solid rounded-3xl border-[#f1f1f1]')}>
        {title}

        <span onClick={() => {
          action?.()
        }}>action</span>
      </div>
    </div>
  )
}
