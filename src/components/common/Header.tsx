import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { useTheme } from './ThemeProvider'
import {
    Sun,
    Moon,
    Monitor,
    Search,
    Home,
    Code,
    Zap,
    GitBranch,
    MousePointer,
    List,
    Clock
} from 'lucide-react'

const navigationItems = [
    { title: 'Getting Started', href: '/', icon: Home },
    { title: 'Components & JSX', href: '/components-jsx', icon: Code },
    { title: 'Props & State', href: '/props-state', icon: Zap },
    { title: 'Hooks', href: '/hooks', icon: GitBranch },
    { title: 'Event Handling', href: '/events', icon: MousePointer },
    { title: 'Conditional Rendering', href: '/conditional', icon: GitBranch },
    { title: 'Lists & Keys', href: '/lists-keys', icon: List },
    { title: 'Component Lifecycle', href: '/lifecycle', icon: Clock },
]

export function Header() {
    const location = useLocation()
    const { theme, setTheme } = useTheme()
    const [commandOpen, setCommandOpen] = React.useState(false)

    const currentPath = location.pathname
    const currentItem = navigationItems.find(item => item.href === currentPath) || navigationItems[0]

    const getBreadcrumbs = () => {
        if (currentPath === '/') {
            return [{ title: 'Getting Started', href: '/' }]
        }

        return [
            { title: 'Getting Started', href: '/' },
            { title: currentItem.title, href: currentPath }
        ]
    }

    const breadcrumbs = getBreadcrumbs()

    return (
        <>
            <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex h-16 items-center px-6 gap-4">
                    {/* Breadcrumbs */}
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumbs.map((item, index) => (
                                <React.Fragment key={item.href}>
                                    <BreadcrumbItem>
                                        {index === breadcrumbs.length - 1 ? (
                                            <BreadcrumbPage>{item.title}</BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex-1" />

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        {/* Command Palette */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCommandOpen(true)}
                            className="hidden sm:flex"
                        >
                            <Search className="w-4 h-4 mr-2" />
                            Search...
                            <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                                <span className="text-xs">⌘</span>K
                            </kbd>
                        </Button>

                        {/* Theme Toggle */}
                        <div className="flex items-center gap-1 border rounded-md p-1">
                            <Button
                                variant={theme === 'light' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setTheme('light')}
                                className="h-8 w-8 p-0"
                            >
                                <Sun className="w-4 h-4" />
                            </Button>
                            <Button
                                variant={theme === 'dark' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setTheme('dark')}
                                className="h-8 w-8 p-0"
                            >
                                <Moon className="w-4 h-4" />
                            </Button>
                            <Button
                                variant={theme === 'system' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setTheme('system')}
                                className="h-8 w-8 p-0"
                            >
                                <Monitor className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Command Dialog */}
            <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
                <CommandInput placeholder="Search concepts..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Navigation">
                        {navigationItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <CommandItem
                                    key={item.href}
                                    onSelect={() => {
                                        window.location.href = item.href
                                        setCommandOpen(false)
                                    }}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {item.title}
                                </CommandItem>
                            )
                        })}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
} 