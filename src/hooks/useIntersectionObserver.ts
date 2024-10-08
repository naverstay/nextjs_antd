import { useEffect, useState } from 'react'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
  enabled?: boolean
}

function useIntersectionObserver(
  nodeId: string,
  { enabled = true, threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  const frozen = entry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }
  const thresholdDep = JSON.stringify(threshold)

  useEffect(() => {
    const node = document.getElementById(nodeId)
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node || !enabled) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeId, thresholdDep, root, rootMargin, frozen, enabled])

  return entry
}

export default useIntersectionObserver
