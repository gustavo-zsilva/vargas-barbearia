const apiKey = process.env.GOOGLE_API_KEY
const baseURL = process.env.GOOGLE_BASE_URL
const baseAddress = process.env.GOOGLE_BASE_ADDRESS

export async function fetchWrapper<T = unknown>(input: RequestInfo | URL, params?: any | undefined, init?: RequestInit | undefined) {
    
    const placeIdData = await fetch(`${baseURL}/geocode/json?address=${baseAddress}&key=${apiKey}`)
    const { results: allPlacesData } = await placeIdData.json()
    const placeId: string = allPlacesData[0].place_id

    const urlParams = new URLSearchParams({
        ...params,
        place_id: placeId,
    })

    const result = await fetch(`${baseURL}${input}/json?${urlParams}&key=${apiKey}`, {
        headers: {
            'Accept-Language': 'pt-BR',
        },
        ...init,
    })

    const data = await result.json()

    // console.log(data);
    
    if (!result.ok) {
        throw new Error('Failed to fetch data')
    }

    return data as T
}