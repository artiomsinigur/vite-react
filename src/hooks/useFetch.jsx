import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url, email) => {
    const baseUrl = 'http://conduit.productionready.io/api'
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)

    const doFeatch = () => { }

    
    useEffect(() => {
        console.log('useFetch')
        
        setIsLoading(true)
        axios(baseUrl + url, {
            method: 'post',
            data: {
                user: {
                    email: 'qq@qq.com',
                    password: '123'
                }
            }
        }).then((res) => {
            console.log('succes', res);
            setIsLoading(false)
            setResponse(res.data)
        }).catch(error => {
            console.log('error', error);
            setIsLoading(false)
            setError(error.response.data)
        })
    }, [url, email])

    return [{ isLoading, response, error }, doFeatch]
}

export default useFetch