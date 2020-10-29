export const kelvinToCelcius = (temp) => {
  if (!parseInt(temp, 10)) return ''
  return Math.round((parseInt(temp, 10) - 273.15))
}
