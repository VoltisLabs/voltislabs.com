"use client";

interface ArticleHeaderProps {
    title: string
    author: string
    date?: string
    showWelcome?: boolean
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, author, date, showWelcome = true }) => {
    return (
        <header
            className="mb-12 text-center"

        >
            {showWelcome && (
              <h2 className="mb-6 whitespace-pre-line text-4xl font-bold text-vl-brown-dark md:text-5xl">
                Welcome to Voltis Labs News Blog
              </h2>
            )}
            <div className="mb-3 flex flex-col items-center justify-center text-sm text-vl-ink-muted md:flex-row md:text-base">
              <span>By {author}</span>
              {date && <span className="mx-2">•</span>}
              {date && <span>{date}</span>}
            </div>
            <h1 className="mb-3 text-2xl font-bold text-vl-brown-dark md:text-3xl">{title}</h1>

        </header>
    )
}

export default ArticleHeader