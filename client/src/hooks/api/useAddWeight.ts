import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addWeight } from '@/api/weight'
import { IWeightEntry } from '@/app/globals'

export const useAddWeight = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (entry: IWeightEntry) => addWeight(entry),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weight'] })
    },
  })
}
