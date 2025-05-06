"use client"
import Title from '@/src/components/UI/Title'
import { motion } from 'framer-motion'

interface ArticleHeaderProps {
    title: string
    author: string
    date?: string
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, author, date }) => {
    return (
        <motion.header
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h2
                className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line"

            >
                {` Welcome to Voltis labs News Blog`}
            </h2>
            <motion.div
                className="flex items-center justify-center text-gray-400 mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >      <span>By {author}</span>
                {date && <span className="mx-2">•</span>}
                {date && <span>{date}</span>}
            </motion.div>
            <motion.h1
                className="text-2xl md:text-3xl font-bold mb-3"

            >
                {title}
            </motion.h1>

        </motion.header>
    )
}

export default ArticleHeader