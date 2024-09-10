import clsx from 'clsx'
import {HTMLAttributes, PropsWithChildren} from 'react'

export default function Container(
  {
    children,
    className,
    ...rest
  }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div {...rest} className={clsx('container', className)}>
      {children}
    </div>
  )
}
