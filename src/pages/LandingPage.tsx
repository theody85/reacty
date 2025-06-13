import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import {
    ArrowRight,
    Code,
    Zap,
    MousePointer,
    GitBranch,
    List,
    Clock,
    Play,
    BookOpen,
    Sparkles
} from 'lucide-react'

const features = [
    {
        icon: Code,
        title: 'Components & JSX',
        description: 'Learn about React components and JSX syntax',
        href: '/components-jsx',
        color: 'bg-blue-500'
    },
    {
        icon: Zap,
        title: 'Props & State',
        description: 'Understand data flow in React applications',
        href: '/props-state',
        color: 'bg-green-500'
    },
    {
        icon: GitBranch,
        title: 'Hooks',
        description: 'Master React hooks for state and effects',
        href: '/hooks',
        color: 'bg-purple-500'
    },
    {
        icon: MousePointer,
        title: 'Event Handling',
        description: 'Handle user interactions and events',
        href: '/events',
        color: 'bg-orange-500'
    },
    {
        icon: GitBranch,
        title: 'Conditional Rendering',
        description: 'Render content based on conditions',
        href: '/conditional',
        color: 'bg-pink-500'
    },
    {
        icon: List,
        title: 'Lists & Keys',
        description: 'Work with dynamic lists and keys',
        href: '/lists-keys',
        color: 'bg-indigo-500'
    },
    {
        icon: Clock,
        title: 'Component Lifecycle',
        description: 'Understand component lifecycle methods',
        href: '/lifecycle',
        color: 'bg-red-500'
    }
]

export function LandingPage() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-8 py-12">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="mx-auto w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-8"
                >
                    <Code className="w-16 h-16 text-white" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        React Concepts
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Learn React through interactive visualizations, animations, and hands-on code examples.
                        Perfect for visual learners who want to understand React concepts deeply.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button asChild size="lg" className="text-lg px-8 py-6">
                        <Link to="/components-jsx">
                            Start Learning
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                        <Play className="mr-2 w-5 h-5" />
                        Watch Demo
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-wrap justify-center gap-2"
                >
                    <Badge variant="secondary" className="text-sm">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Interactive
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                        <BookOpen className="w-3 h-3 mr-1" />
                        Visual Learning
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                        <Code className="w-3 h-3 mr-1" />
                        Hands-on
                    </Badge>
                </motion.div>
            </section>

            {/* Progress Section */}
            <section className="space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-2">Your Learning Progress</h2>
                    <p className="text-muted-foreground">Track your journey through React concepts</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            Course Progress
                        </CardTitle>
                        <CardDescription>
                            1 of 7 concepts completed
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Progress value={14} className="h-3" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Getting Started</span>
                            <span>14% Complete</span>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Features Grid */}
            <section className="space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-2">What You'll Learn</h2>
                    <p className="text-muted-foreground">Explore React concepts through interactive examples</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={feature.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                                    <CardHeader>
                                        <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                                        <CardDescription>{feature.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button asChild variant="outline" className="w-full">
                                            <Link to={feature.href}>
                                                Learn More
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* Alert Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
            >
                <Alert>
                    <Sparkles className="h-4 w-4" />
                    <AlertDescription>
                        <strong>Pro tip:</strong> Each concept includes interactive code examples and visual animations.
                        Try editing the code to see how changes affect the output in real-time!
                    </AlertDescription>
                </Alert>
            </motion.div>
        </div>
    )
} 