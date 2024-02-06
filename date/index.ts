export const formattedDate = (date: string) => {
  // formatted date from ISO to pt-BR date dd/mm/yyyy
  const value = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date))

  return value || '-'
}
