import useImport from '../hooks/useImport'

const SafeImage = ({ fileName, alt, className, ...rest }) => {
    const { loading, error, content } = useImport(fileName)

    if (error) return <p>{alt}</p>
    
    return (
        <>
            {loading ? (
                <p></p>
            ) : (
                <img
                    className={`Image${
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

export default SafeImage