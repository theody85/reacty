import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, ChevronDown, Code, FileCode } from 'lucide-react'

interface TreeNode {
    id: string
    name: string
    type: 'component' | 'element' | 'text'
    children?: TreeNode[]
    props?: Record<string, any>
}

interface ComponentTreeProps {
    code: string
}

// Simple parser to extract component structure from code
const parseComponentStructure = (code: string): TreeNode[] => {
    // This is a simplified parser - in a real app you'd use a proper AST parser
    const components: TreeNode[] = []

    // Look for function components
    const functionMatches = code.match(/function\s+(\w+)/g)
    if (functionMatches) {
        functionMatches.forEach((match, index) => {
            const name = match.replace('function ', '')
            components.push({
                id: `component-${index}`,
                name,
                type: 'component',
                children: [
                    {
                        id: `element-${index}`,
                        name: 'div',
                        type: 'element',
                        children: [
                            {
                                id: `text-${index}`,
                                name: `Content from ${name}`,
                                type: 'text'
                            }
                        ]
                    }
                ]
            })
        })
    }

    // Look for JSX elements
    const jsxMatches = code.match(/<(\w+)/g)
    if (jsxMatches && components.length === 0) {
        jsxMatches.forEach((match, index) => {
            const name = match.replace('<', '')
            if (name !== 'div' && name !== 'h1' && name !== 'p') {
                components.push({
                    id: `element-${index}`,
                    name,
                    type: 'element',
                    children: [
                        {
                            id: `text-${index}`,
                            name: `Content`,
                            type: 'text'
                        }
                    ]
                })
            }
        })
    }

    return components.length > 0 ? components : [
        {
            id: 'root',
            name: 'App',
            type: 'component',
            children: [
                {
                    id: 'welcome',
                    name: 'Welcome',
                    type: 'component',
                    children: [
                        {
                            id: 'div-1',
                            name: 'div',
                            type: 'element',
                            children: [
                                { id: 'h1', name: 'h1', type: 'element', children: [{ id: 'text-1', name: 'Hello, React!', type: 'text' }] },
                                { id: 'p', name: 'p', type: 'element', children: [{ id: 'text-2', name: 'This is a React component', type: 'text' }] }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

const TreeNode: React.FC<{ node: TreeNode; level: number }> = ({ node, level }) => {
    const [expanded, setExpanded] = React.useState(true)
    const hasChildren = node.children && node.children.length > 0

    const getIcon = () => {
        switch (node.type) {
            case 'component':
                return <Code className="w-4 h-4 text-blue-500" />
            case 'element':
                return <FileCode className="w-4 h-4 text-green-500" />
            default:
                return null
        }
    }

    const getBadgeVariant = () => {
        switch (node.type) {
            case 'component':
                return 'default'
            case 'element':
                return 'secondary'
            default:
                return 'outline'
        }
    }

    return (
        <div className="space-y-1">
            <motion.div
                className="flex items-center gap-2 py-1 px-2 rounded hover:bg-muted/50 cursor-pointer"
                onClick={() => hasChildren && setExpanded(!expanded)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div style={{ marginLeft: `${level * 16}px` }} className="flex items-center gap-2">
                    {hasChildren && (
                        <motion.div
                            animate={{ rotate: expanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </motion.div>
                    )}
                    {getIcon()}
                    <Badge variant={getBadgeVariant()} className="text-xs">
                        {node.name}
                    </Badge>
                    {node.type === 'text' && (
                        <span className="text-sm text-muted-foreground ml-2">
                            "{node.name}"
                        </span>
                    )}
                </div>
            </motion.div>

            {hasChildren && expanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {node.children!.map((child) => (
                        <TreeNode key={child.id} node={child} level={level + 1} />
                    ))}
                </motion.div>
            )}
        </div>
    )
}

export function ComponentTree({ code }: ComponentTreeProps) {
    const [treeData] = React.useState(() => parseComponentStructure(code))

    return (
        <Card>
            <CardContent className="p-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-4">
                        <Code className="w-5 h-5 text-blue-500" />
                        <h3 className="font-semibold">Component Tree Structure</h3>
                    </div>

                    <div className="border rounded-lg p-4 bg-muted/30">
                        {treeData.map((node) => (
                            <TreeNode key={node.id} node={node} level={0} />
                        ))}
                    </div>

                    <div className="text-xs text-muted-foreground mt-4 space-y-1">
                        <div className="flex items-center gap-2">
                            <Code className="w-3 h-3 text-blue-500" />
                            <span>React Components</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileCode className="w-3 h-3 text-green-500" />
                            <span>HTML Elements</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-muted-foreground" />
                            <span>Text Content</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
} 