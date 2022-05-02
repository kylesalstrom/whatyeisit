import { useEffect, useState } from 'react'

const useImport = (fileName) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [content, setContent] = useState(null)

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await import(`../${fileName}`) // change relative path to suit your needs
                setContent(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchContent()
    }, [fileName])

    return {
        loading,
        error,
        content,
    }
}

export default useImport