import { getWeight } from '@/actions/Weight/actions'
import { useQuery } from '@tanstack/react-query'

export const useWeight = () => {
  return useQuery({
    queryKey: ['weight'],
    queryFn: () => getWeight(),
  })
}
