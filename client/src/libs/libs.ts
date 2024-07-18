import dayjs from 'dayjs'

export const getDate = (offset: number, unit?: any) => {
  if (offset === 0) return new Date().toISOString().substring(0, 10)

  return JSON.parse(JSON.stringify(dayjs().subtract(offset, unit).format('YYYY-MM-DD')))
}
