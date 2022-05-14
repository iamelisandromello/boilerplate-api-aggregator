export const variables = {
  audiance: process.env.AUDIANCE ?? 'undefined'
}

export const testVariables = (): boolean => {
  return Object.values(variables).every((value) => {
    console.log('Variavel: ', value)
    return (value !== 'undefined')
  })
}
