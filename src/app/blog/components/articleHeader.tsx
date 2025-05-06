"use client"
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
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-3"

            >
                {title}
            </motion.h1>
            <motion.div
                className="flex items-center justify-center text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <span>By {author}</span>
                {date && <span className="mx-2">•</span>}
                {date && <span>{date}</span>}
            </motion.div>
        </motion.header>
    )
}

export default ArticleHeader