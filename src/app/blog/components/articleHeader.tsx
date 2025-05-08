"use client"
import Title from '@/src/components/UI/Title'
import { motion } from 'framer-motion'

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
            {showWelcome && (<h2
                className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line"

            >
                {` Welcome to Voltis labs News Blog`}
            </h2>)}
            <div
                className="flex items-center justify-center text-gray-400 mb-3"

            >      <span>By {author}</span>
                {date && <span className="mx-2">•</span>}
                {date && <span>{date}</span>}
            </div>
            <h1
                className="text-2xl md:text-3xl font-bold mb-3"

            >
                {title}
            </h1>

        </header>
    )
}

export default ArticleHeader