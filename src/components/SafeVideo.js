import useImport from '../hooks/useImport'

const SafeVideo = ({ fileName, alt, className, ...rest }) => {
    const { loading, error, content } = useImport(fileName)

    if (error) return <p>{alt}</p>
    
    return (
        <>
            {loading ? (
                <p></p>
            ) : (
                <video
                    className={`Video${
                        className
                            ? className.padStart(className.length + 1)
                            : ''
                    }`}
                    src={content}
                    alt={alt}
                    {...rest}
                />
            )}
        </>
    )
}

export default SafeVideo