import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'
import { Header } from './Header'
import { motion } from 'framer-motion'

export function Layout() {
    return (
        <div className="min-h-screen bg-background">
            <div className="flex h-screen">
                {/* Sidebar */}
                <Navigation />

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />

                    {/* Page Content */}
                    <main className="flex-1 overflow-y-auto p-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-7xl mx-auto"
                        >
                            <Outlet />
                        </motion.div>
                    </main>
                </div>
            </div>
        </div>
    )
} 