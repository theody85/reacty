import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play, Code } from 'lucide-react'
import { useState, useEffect } from 'react'

interface CodeLine {
    line: number
    code: string
    isExecuting?: boolean
    explanation?: string
}

interface CodeExecutionVisualizerProps {
    title: string
    description: string
    codeLines: CodeLine[]
    isVisible?: boolean
    className?: string
}

export function CodeExecutionVisualizer({
    title,
    description,
    codeLines,
    isVisible = true,
    className = ""
}: CodeExecutionVisualizerProps) {
    const [executingLines, setExecutingLines] = useState<Set<number>>(new Set())

    const highlightLine = (lineNumber: number, duration: number = 1000) => {
        setExecutingLines(prev => new Set([...prev, lineNumber]))

        setTimeout(() => {
            setExecutingLines(prev => {
                const newSet = new Set(prev)
                newSet.delete(lineNumber)
                return newSet
            })
        }, duration)
    }

    const executeCode = (lineNumbers: number[], delay: number = 500) => {
        lineNumbers.forEach((lineNumber, index) => {
            setTimeout(() => {
                highlightLine(lineNumber, 800)
            }, index * delay)
        })
    }

    const syntaxHighlight = (code: string) => {
        return code
            .replace(/\b(const|let|var|function|return|if|else|for|while|useState|useEffect|useRef|useMemo|useCallback|useContext|createContext)\b/g, '<span class="text-blue-600 font-semibold">$1</span>')
            .replace(/\b(import|export|from|default)\b/g, '<span class="text-purple-600 font-semibold">$1</span>')
            .replace(/\b(React|useState|useEffect|useRef|useMemo|useCallback|useContext)\b/g, '<span class="text-green-600 font-semibold">$1</span>')
            .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-orange-600 font-semibold">$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="text-red-600 font-semibold">$1</span>')
            .replace(/(["'`])(.*?)\1/g, '<span class="text-green-600">$1$2$1</span>')
            .replace(/(\/\/.*)/g, '<span class="text-gray-500 italic">$1</span>')
            .replace(/(\{.*?\})/g, '<span class="text-yellow-600">$1</span>')
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`space-y-4 ${className}`}
                >
                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Code className="w-5 h-5 text-blue-500" />
                                {title}
                                <Badge variant="secondary" className="ml-auto">
                                    <Play className="w-3 h-3 mr-1" />
                                    Live Execution
                                </Badge>
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">{description}</p>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                                <div className="space-y-1">
                                    {codeLines.map((line, index) => (
                                        <motion.div
                                            key={line.line}
                                            className={`flex items-start ${executingLines.has(line.line)
                                                ? 'bg-blue-500/20 rounded px-2 py-1 -mx-2'
                                                : ''
                                                }`}
                                            animate={executingLines.has(line.line) ? {
                                                boxShadow: [
                                                    '0 0 0 0 rgba(59, 130, 246, 0.4)',
                                                    '0 0 0 10px rgba(59, 130, 246, 0)',
                                                    '0 0 0 0 rgba(59, 130, 246, 0)'
                                                ]
                                            } : {}}
                                            transition={{ duration: 1, repeat: executingLines.has(line.line) ? Infinity : 0 }}
                                        >
                                            <span className="text-gray-500 mr-4 select-none min-w-[3rem]">
                                                {line.line}
                                            </span>
                                            <div
                                                className="flex-1"
                                                dangerouslySetInnerHTML={{
                                                    __html: syntaxHighlight(line.code)
                                                }}
                                            />
                                            {line.explanation && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="ml-4 text-xs text-blue-400 bg-blue-900/50 px-2 py-1 rounded"
                                                >
                                                    {line.explanation}
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// Hook to expose execution functions to parent components
export function useCodeExecution() {
    const [executingLines, setExecutingLines] = useState<Set<number>>(new Set())

    const highlightLine = (lineNumber: number, duration: number = 1000) => {
        setExecutingLines(prev => new Set([...prev, lineNumber]))

        setTimeout(() => {
            setExecutingLines(prev => {
                const newSet = new Set(prev)
                newSet.delete(lineNumber)
                return newSet
            })
        }, duration)
    }

    const executeCode = (lineNumbers: number[], delay: number = 500) => {
        lineNumbers.forEach((lineNumber, index) => {
            setTimeout(() => {
                highlightLine(lineNumber, 800)
            }, index * delay)
        })
    }

    return { executingLines, highlightLine, executeCode }
} 