import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap } from 'lucide-react'

export function PropsState() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
            >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Props & State</h1>
                    <p className="text-muted-foreground">Understand data flow in React applications</p>
                </div>
            </motion.div>

            <Card>
                <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                    <CardDescription>
                        This section will cover React props and state management with interactive examples.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Badge variant="secondary">Under Development</Badge>
                </CardContent>
            </Card>
        </div>
    )
} 