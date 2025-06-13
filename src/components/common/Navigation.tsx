import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
    Code,
    Zap,
    MousePointer,
    GitBranch,
    List,
    Clock,
    Home,
    BookOpen,
    Trophy
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
    {
        title: 'Getting Started',
        href: '/',
        icon: Home,
        description: 'Welcome to React Concepts',
        completed: true
    },
    {
        title: 'Components & JSX',
        href: '/components-jsx',
        icon: Code,
        description: 'Learn about React components and JSX syntax',
        completed: false
    },
    {
        title: 'Props & State',
        href: '/props-state',
        icon: Zap,
        description: 'Understand data flow in React',
        completed: false
    },
    {
        title: 'Hooks',
        href: '/hooks',
        icon: GitBranch,
        description: 'Master React hooks',
        completed: false
    },
    {
        title: 'Event Handling',
        href: '/events',
        icon: MousePointer,
        description: 'Handle user interactions',
        completed: false
    },
    {
        title: 'Conditional Rendering',
        href: '/conditional',
        icon: GitBranch,
        description: 'Render content conditionally',
        completed: false
    },
    {
        title: 'Lists & Keys',
        href: '/lists-keys',
        icon: List,
        description: 'Work with dynamic lists',
        completed: false
    },
    {
        title: 'Component Lifecycle',
        href: '/lifecycle',
        icon: Clock,
        description: 'Understand component lifecycle',
        completed: false
    }
]

export function Navigation() {
    const completedCount = navigationItems.filter(item => item.completed).length
    const progress = (completedCount / navigationItems.length) * 100

    return (
        <div className="w-80 bg-card border-r border-border flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg">React Concepts</h1>
                        <p className="text-sm text-muted-foreground">Interactive Learning</p>
                    </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="text-muted-foreground">{completedCount}/{navigationItems.length}</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
                {navigationItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={({ isActive }) =>
                                cn(
                                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                                    'hover:bg-accent hover:text-accent-foreground',
                                    isActive
                                        ? 'bg-primary text-primary-foreground'
                                        : 'text-muted-foreground'
                                )
                            }
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Icon className="w-4 h-4" />
                            </motion.div>
                            <span className="flex-1">{item.title}</span>
                            {item.completed && (
                                <Badge variant="secondary" className="text-xs">
                                    <Trophy className="w-3 h-3 mr-1" />
                                    Done
                                </Badge>
                            )}
                        </NavLink>
                    )
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-border">
                <div className="text-center text-sm text-muted-foreground">
                    <p>Interactive React Learning</p>
                    <p className="text-xs mt-1">Built with ❤️ and shadcn/ui</p>
                </div>
            </div>
        </div>
    )
} 