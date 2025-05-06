"use client"
import { motion } from 'framer-motion'

const PhilosophyGrid = () => {
    const philosophies = [
        {
            title: "Human-Centered",
            description: "Designing for real lives, not just data models."
        },
        // ... other philosophies
    ]

    return (
        <motion.section
            className="my-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {philosophies.map((philosophy, index) => (
                    <motion.div
                        key={index}
                        className="text-center p-6 bg-gray-50 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 transition-all"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                            y: -5,
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <motion.div
                            className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                            whileHover={{ rotate: 5, scale: 1.05 }}
                        >
                            {index + 1}
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2">{philosophy.title}</h3>
                        <p className="text-gray-600">{philosophy.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default PhilosophyGrid