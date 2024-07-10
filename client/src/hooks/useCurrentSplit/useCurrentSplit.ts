import { getCurrentSplit } from '@/actions/Weight/actions'
import { ICurrentSplit } from '@/app/record/record'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useCurrentSplit = () => {
  return useQuery({
    queryKey: ['currentSplit'],
    queryFn: async () => {
      const { data } = await axios.get('/api/splits/current')
      return data as ICurrentSplit
    },
  })
}
