const apiKey = process.env.GOOGLE_API_KEY

export async function fetchWrapper<T = unknown>(input: RequestInfo | URL, params?: any | undefined, init?: RequestInit | undefined) {
    
    const urlParams = new URLSearchParams({
        ...params,
    })

    const result = await fetch(`https://maps.googleapis.com/maps/api${input}/json?${urlParams}&key=${apiKey}`, {
        headers: {
            'Accept-Language': 'pt-BR',
        },
        ...init,
    })
    const data = await result.json()

    console.log(data);
    
    if (!result.ok) {
        throw new Error('Failed to fetch data')
    }

    return data as T
}