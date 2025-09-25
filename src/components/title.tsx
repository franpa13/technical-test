interface PropsTitle {
    title: string
}

export const Title = ({ title }: PropsTitle) => {
    return (
        <h1 className="text-3xl font-bold bg-clip-text text-transparent"
            style={{
                backgroundImage: 'linear-gradient(to right, var(--login-gradient-from), var(--login-gradient-to))'
            }}>
            {title}

        </h1>
    )
}
