export const obtPalabraFetch = async () => {
  try {
    const resp = await fetch('https://random-word-api.herokuapp.com/word?number=1&length=5&lang=es')

    let data = await resp.json()

    const palabra = data[0]

    return palabra
  } catch (error) {
    throw new Error(error.statusText)
  }
}
