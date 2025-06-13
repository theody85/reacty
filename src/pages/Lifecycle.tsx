import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'

export function Lifecycle() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
            >
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Component Lifecycle</h1>
                    <p className="text-muted-foreground">Understand component lifecycle methods</p>
                </div>
            </motion.div>

            <Card>
                <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                    <CardDescription>
                        This section will cover React component lifecycle with interactive examples.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Badge variant="secondary">Under Development</Badge>
                </CardContent>
            </Card>
        </div>
    )
} 