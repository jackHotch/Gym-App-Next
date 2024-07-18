import { getCurrentSplit } from '@/actions/Weight/actions'
import { useQuery } from '@tanstack/react-query'

export const useCurrentSplit = () => {
  return useQuery({
    queryKey: ['currentSplit'],
    queryFn: () => getCurrentSplit(),
  })
}
