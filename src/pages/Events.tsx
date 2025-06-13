import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MousePointer, Keyboard, Mouse, Zap, Type } from 'lucide-react'
import { CodeExecutionVisualizer, useCodeExecution } from '@/components/visualizations/CodeExecutionVisualizer'

export function Events() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
            >
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <MousePointer className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Event Handling</h1>
                    <p className="text-muted-foreground">React to clicks, typing, mouse moves, and more!</p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ClickExample />
                <InputExample />
                <MouseExample />
                <KeyboardExample />
            </div>
        </div>
    )
}

function ClickExample() {
    const [count, setCount] = useState(0)
    const { executeCode } = useCodeExecution()
    const codeLines = [
        { line: 1, code: 'const [count, setCount] = useState(0)' },
        { line: 2, code: 'const handleClick = () => {', explanation: 'Runs on button click' },
        { line: 3, code: '  setCount(count + 1)' },
        { line: 4, code: '}' },
        { line: 5, code: '<Button onClick={handleClick}>Click me!</Button>' },
    ]
    const handleClick = () => {
        executeCode([2, 3])
        setCount(count + 1)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Zap className="w-5 h-5 text-orange-500" />Click Event</CardTitle>
                <CardDescription>Click the button to increase the count!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <motion.button
                    onClick={handleClick}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-orange-100 rounded-lg text-xl font-bold border-2 border-orange-300 hover:bg-orange-200 transition"
                >
                    Click me! <span className="ml-2">{count}</span>
                </motion.button>
                <CodeExecutionVisualizer
                    title="Click Event Code"
                    description="See which code runs when you click!"
                    codeLines={codeLines}
                />
            </CardContent>
        </Card>
    )
}

function InputExample() {
    const [name, setName] = useState('')
    const { executeCode } = useCodeExecution()
    const codeLines = [
        { line: 1, code: 'const [name, setName] = useState("")' },
        { line: 2, code: 'const handleChange = (e) => {', explanation: 'Runs on input change' },
        { line: 3, code: '  setName(e.target.value)' },
        { line: 4, code: '}' },
        { line: 5, code: '<Input onChange={handleChange} />' },
    ]
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        executeCode([2, 3])
        setName(e.target.value)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Type className="w-5 h-5 text-blue-500" />Input Event</CardTitle>
                <CardDescription>Type your name and see it update live!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Label htmlFor="name">Your Name:</Label>
                <Input id="name" value={name} onChange={handleChange} placeholder="Type here..." />
                {name && <div className="mt-2 text-lg">Hello, <span className="font-bold text-blue-600">{name}</span>!</div>}
                <CodeExecutionVisualizer
                    title="Input Event Code"
                    description="See which code runs as you type!"
                    codeLines={codeLines}
                />
            </CardContent>
        </Card>
    )
}

function MouseExample() {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const { executeCode } = useCodeExecution()
    const codeLines = [
        { line: 1, code: 'const [pos, setPos] = useState({ x: 0, y: 0 })' },
        { line: 2, code: 'const handleMove = (e) => {', explanation: 'Runs on mouse move' },
        { line: 3, code: '  setPos({ x: e.clientX, y: e.clientY })' },
        { line: 4, code: '}' },
        { line: 5, code: '<div onMouseMove={handleMove}>...</div>' },
    ]
    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        executeCode([2, 3])
        setPos({ x: e.clientX, y: e.clientY })
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Mouse className="w-5 h-5 text-green-500" />Mouse Move Event</CardTitle>
                <CardDescription>Move your mouse in the box below!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div
                    onMouseMove={handleMove}
                    className="h-32 bg-green-50 border-2 border-green-300 rounded-lg flex items-center justify-center text-lg font-mono"
                >
                    X: {pos.x} | Y: {pos.y}
                </div>
                <CodeExecutionVisualizer
                    title="Mouse Move Event Code"
                    description="See which code runs as you move the mouse!"
                    codeLines={codeLines}
                />
            </CardContent>
        </Card>
    )
}

function KeyboardExample() {
    const [lastKey, setLastKey] = useState('')
    const { executeCode } = useCodeExecution()
    const codeLines = [
        { line: 1, code: 'const [lastKey, setLastKey] = useState("")' },
        { line: 2, code: 'const handleKeyDown = (e) => {', explanation: 'Runs on key down' },
        { line: 3, code: '  setLastKey(e.key)' },
        { line: 4, code: '}' },
        { line: 5, code: '<input onKeyDown={handleKeyDown} />' },
    ]
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        executeCode([2, 3])
        setLastKey(e.key)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Keyboard className="w-5 h-5 text-purple-500" />Keyboard Event</CardTitle>
                <CardDescription>Press any key in the input below!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Input onKeyDown={handleKeyDown} placeholder="Press any key..." />
                {lastKey && <div className="mt-2 text-lg">Last key: <span className="font-bold text-purple-600">{lastKey}</span></div>}
                <CodeExecutionVisualizer
                    title="Keyboard Event Code"
                    description="See which code runs as you press keys!"
                    codeLines={codeLines}
                />
            </CardContent>
        </Card>
    )
} 