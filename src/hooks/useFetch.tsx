import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState<{fact: string; length: number}>({
        fact: '',
        length: 0
    })
    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        const abortController = new AbortController()
        setIsPending(true)
        const fetchData = async () => {

            try {
                const response = await fetch(url, { signal: abortController.signal })
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                setData(data)
                setIsPending(false)
                setError('')
            }

            catch(err: any) {
                if(err.name === 'AbortError') {
                    setError('The fetch was aborted')
                }
                else {
                    setIsPending(false)
                    setError('Could not fetch the data for the resource')
                }
            }
        }

        // invoke the function
        fetchData()

        return () => {
            abortController.abort()
        }
    }, [url])

    return { data, isPending, error }
}
