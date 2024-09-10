import useSWR from 'swr'

export const useSharedState = (key: string, initial: never | undefined = undefined) => {
  const { data: state, mutate: setState } = useSWR(
    key,
    initial !== undefined
      ? {
          fallbackData: initial,
        }
      : {}
  )

  return [state, setState] as const
}
