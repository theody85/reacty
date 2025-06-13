import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GitBranch, Zap, Eye, Users, Target, Brain, Timer } from 'lucide-react'
import { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Progress } from '@/components/ui/progress'
import { CodeExecutionVisualizer, useCodeExecution } from '@/components/visualizations/CodeExecutionVisualizer'

// Context for useContext example
const ThemeContext = createContext('light')

export function Hooks() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
            >
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">React Hooks</h1>
                    <p className="text-muted-foreground">Master React hooks with interactive examples and visualizations</p>
                </div>
            </motion.div>

            <Tabs defaultValue="useState" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="useState">useState</TabsTrigger>
                    <TabsTrigger value="useEffect">useEffect</TabsTrigger>
                    <TabsTrigger value="useContext">useContext</TabsTrigger>
                    <TabsTrigger value="useRef">useRef</TabsTrigger>
                    <TabsTrigger value="useMemo">useMemo</TabsTrigger>
                    <TabsTrigger value="useCallback">useCallback</TabsTrigger>
                </TabsList>

                <TabsContent value="useState" className="space-y-4">
                    <UseStateExample />
                </TabsContent>

                <TabsContent value="useEffect" className="space-y-4">
                    <UseEffectExample />
                </TabsContent>

                <TabsContent value="useContext" className="space-y-4">
                    <UseContextExample />
                </TabsContent>

                <TabsContent value="useRef" className="space-y-4">
                    <UseRefExample />
                </TabsContent>

                <TabsContent value="useMemo" className="space-y-4">
                    <UseMemoExample />
                </TabsContent>

                <TabsContent value="useCallback" className="space-y-4">
                    <UseCallbackExample />
                </TabsContent>
            </Tabs>
        </div>
    )
}

// useState Example
function UseStateExample() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [isVisible, setIsVisible] = useState(true)
    const { highlightLine, executeCode } = useCodeExecution()

    const handleIncrement = () => {
        executeCode([1, 2, 3]) // State update triggers re-render
        setCount(count + 1)
    }

    const handleDecrement = () => {
        executeCode([1, 2, 3]) // State update triggers re-render
        setCount(count - 1)
    }

    const handleReset = () => {
        executeCode([1, 2, 3]) // State update triggers re-render
        setCount(0)
    }

    const handleNameChange = (value: string) => {
        executeCode([4, 5, 6]) // State update triggers re-render
        setName(value)
    }

    const handleVisibilityToggle = (value: boolean) => {
        executeCode([7, 8, 9]) // State update triggers re-render
        setIsVisible(value)
    }

    const useStateCode = [
        { line: 1, code: "const [count, setCount] = useState(0)" },
        { line: 2, code: "const [name, setName] = useState('')" },
        { line: 3, code: "const [isVisible, setIsVisible] = useState(true)" },
        { line: 4, code: "" },
        { line: 5, code: "const handleIncrement = () => {" },
        { line: 6, code: "  setCount(count + 1) // Triggers re-render" },
        { line: 7, code: "}" },
        { line: 8, code: "" },
        { line: 9, code: "const handleNameChange = (value) => {" },
        { line: 10, code: "  setName(value) // Triggers re-render" },
        { line: 11, code: "}" },
        { line: 12, code: "" },
        { line: 13, code: "return (" },
        { line: 14, code: "  <div>" },
        { line: 15, code: "    <span>{count}</span> // Re-renders when count changes" },
        { line: 16, code: "    <input value={name} onChange={handleNameChange} />" },
        { line: 17, code: "  </div>" },
        { line: 18, code: ")" }
    ]

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-500" />
                        useState Hook
                    </CardTitle>
                    <CardDescription>
                        Manages component state with automatic re-renders when state changes
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <motion.div
                        animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0.5 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border"
                    >
                        <div className="text-center space-y-4">
                            <motion.div
                                key={count}
                                initial={{ scale: 0.5, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className="text-6xl font-bold text-blue-600"
                            >
                                {count}
                            </motion.div>
                            <div className="flex gap-2 justify-center">
                                <Button onClick={handleDecrement} variant="outline">
                                    -
                                </Button>
                                <Button onClick={handleIncrement}>
                                    +
                                </Button>
                                <Button onClick={handleReset} variant="secondary">
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name Input:</Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => handleNameChange(e.target.value)}
                                placeholder="Type your name..."
                            />
                        </div>
                        {name && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="p-3 bg-green-50 border border-green-200 rounded-lg"
                            >
                                Hello, <span className="font-semibold">{name}</span>! 👋
                            </motion.div>
                        )}
                    </div>

                    <div className="flex items-center space-x-2">
                        <Switch
                            checked={isVisible}
                            onCheckedChange={handleVisibilityToggle}
                        />
                        <Label>Toggle visibility</Label>
                    </div>
                </CardContent>
            </Card>

            <CodeExecutionVisualizer
                title="useState Code Execution"
                description="Watch the code execute in real-time as you interact with the state"
                codeLines={useStateCode}
            />
        </div>
    )
}

// useEffect Example
function UseEffectExample() {
    const [count, setCount] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const { highlightLine, executeCode } = useCodeExecution()

    useEffect(() => {
        executeCode([1, 2, 3, 4, 5]) // Effect setup
        const handleResize = () => {
            executeCode([6, 7]) // Resize handler
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            executeCode([8, 9]) // Cleanup
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        executeCode([10, 11, 12, 13, 14]) // Effect setup
        const handleOnline = () => {
            executeCode([15]) // Online handler
            setIsOnline(true)
        }
        const handleOffline = () => {
            executeCode([16]) // Offline handler
            setIsOnline(false)
        }

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            executeCode([17, 18, 19]) // Cleanup
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    useEffect(() => {
        executeCode([20, 21]) // Document title effect
        document.title = `Count: ${count}`
    }, [count])

    const handleIncrement = () => {
        executeCode([22, 23]) // State update triggers effect
        setCount(count + 1)
    }

    const useEffectCode = [
        { line: 1, code: "useEffect(() => {", explanation: "Effect runs on mount" },
        { line: 2, code: "  const handleResize = () => {" },
        { line: 3, code: "    setWindowWidth(window.innerWidth)" },
        { line: 4, code: "  }" },
        { line: 5, code: "  window.addEventListener('resize', handleResize)" },
        { line: 6, code: "  return () => {", explanation: "Cleanup function" },
        { line: 7, code: "    window.removeEventListener('resize', handleResize)" },
        { line: 8, code: "  }" },
        { line: 9, code: "}, []) // Empty dependency array" },
        { line: 10, code: "" },
        { line: 11, code: "useEffect(() => {", explanation: "Online/offline effect" },
        { line: 12, code: "  const handleOnline = () => setIsOnline(true)" },
        { line: 13, code: "  const handleOffline = () => setIsOnline(false)" },
        { line: 14, code: "  window.addEventListener('online', handleOnline)" },
        { line: 15, code: "  window.addEventListener('offline', handleOffline)" },
        { line: 16, code: "  return () => {", explanation: "Cleanup on unmount" },
        { line: 17, code: "    window.removeEventListener('online', handleOnline)" },
        { line: 18, code: "    window.removeEventListener('offline', handleOffline)" },
        { line: 19, code: "  }" },
        { line: 20, code: "}, [])" },
        { line: 21, code: "" },
        { line: 22, code: "useEffect(() => {", explanation: "Runs when count changes" },
        { line: 23, code: "  document.title = `Count: ${count}`" },
        { line: 24, code: "}, [count]) // Dependency array with count" }
    ]

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-blue-500" />
                        useEffect Hook
                    </CardTitle>
                    <CardDescription>
                        Handles side effects like API calls, subscriptions, and DOM manipulation
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-4 bg-blue-50 rounded-lg border text-center"
                        >
                            <div className="text-2xl font-bold text-blue-600">{count}</div>
                            <div className="text-sm text-gray-600">Counter</div>
                            <Button
                                onClick={handleIncrement}
                                size="sm"
                                className="mt-2"
                            >
                                Increment
                            </Button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-4 bg-green-50 rounded-lg border text-center"
                        >
                            <div className="text-2xl font-bold text-green-600">{windowWidth}px</div>
                            <div className="text-sm text-gray-600">Window Width</div>
                            <div className="text-xs text-gray-500 mt-1">Resize to see changes</div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-4 rounded-lg border text-center"
                            style={{ backgroundColor: isOnline ? '#f0fdf4' : '#fef2f2' }}
                        >
                            <div className={`text-2xl font-bold ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
                                {isOnline ? '🟢' : '🔴'}
                            </div>
                            <div className="text-sm text-gray-600">
                                {isOnline ? 'Online' : 'Offline'}
                            </div>
                        </motion.div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Effects Running:</h4>
                        <ul className="text-sm space-y-1">
                            <li>• Document title updates when count changes</li>
                            <li>• Window resize listener (cleanup on unmount)</li>
                            <li>• Online/offline status listener (cleanup on unmount)</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <CodeExecutionVisualizer
                title="useEffect Code Execution"
                description="Watch effects run, cleanup, and re-run based on dependencies"
                codeLines={useEffectCode}
            />
        </div>
    )
}

// useContext Example
function UseContextExample() {
    const [theme, setTheme] = useState('light')
    const [user, setUser] = useState('Guest')
    const { highlightLine, executeCode } = useCodeExecution()

    const handleThemeToggle = () => {
        executeCode([1, 2, 3]) // Theme state update
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const handleUserSwitch = () => {
        executeCode([4, 5, 6]) // User state update
        setUser(user === 'Guest' ? 'Admin' : 'Guest')
    }

    const useContextCode = [
        { line: 1, code: "const ThemeContext = createContext('light')", explanation: "Create context" },
        { line: 2, code: "" },
        { line: 3, code: "function UseContextExample() {", explanation: "Provider component" },
        { line: 4, code: "  const [theme, setTheme] = useState('light')" },
        { line: 5, code: "  const [user, setUser] = useState('Guest')" },
        { line: 6, code: "" },
        { line: 7, code: "  return (" },
        { line: 8, code: "    <ThemeContext.Provider value={theme}>", explanation: "Provide context value" },
        { line: 9, code: "      <ContextConsumer />" },
        { line: 10, code: "    </ThemeContext.Provider>" },
        { line: 11, code: "  )" },
        { line: 12, code: "}" },
        { line: 13, code: "" },
        { line: 14, code: "function ContextConsumer() {", explanation: "Consumer component" },
        { line: 15, code: "  const theme = useContext(ThemeContext)", explanation: "Consume context" },
        { line: 16, code: "  return <div>Theme: {theme}</div>" },
        { line: 17, code: "}" }
    ]

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-500" />
                        useContext Hook
                    </CardTitle>
                    <CardDescription>
                        Consumes values from React Context without prop drilling
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex gap-4">
                        <Button
                            onClick={handleThemeToggle}
                            variant={theme === 'light' ? 'default' : 'secondary'}
                        >
                            Toggle Theme: {theme}
                        </Button>
                        <Button
                            onClick={handleUserSwitch}
                            variant="outline"
                        >
                            Switch User: {user}
                        </Button>
                    </div>

                    <ThemeContext.Provider value={theme}>
                        <ContextConsumer />
                    </ThemeContext.Provider>

                    <motion.div
                        animate={{
                            backgroundColor: theme === 'light' ? '#f8fafc' : '#1e293b',
                            color: theme === 'light' ? '#1e293b' : '#f8fafc'
                        }}
                        className="p-4 rounded-lg border transition-colors"
                    >
                        <h4 className="font-semibold mb-2">Context Visualization:</h4>
                        <div className="text-sm space-y-1">
                            <div>Provider → Consumer</div>
                            <div>Theme: {theme}</div>
                            <div>User: {user}</div>
                        </div>
                    </motion.div>
                </CardContent>
            </Card>

            <CodeExecutionVisualizer
                title="useContext Code Execution"
                description="Watch context providers and consumers work together"
                codeLines={useContextCode}
            />
        </div>
    )
}

function ContextConsumer() {
    const theme = useContext(ThemeContext)
    const { highlightLine } = useCodeExecution()

    // Highlight the consumer when it re-renders
    useEffect(() => {
        highlightLine(15, 500)
    }, [theme])

    return (
        <motion.div
            animate={{
                backgroundColor: theme === 'light' ? '#fef3c7' : '#1f2937',
                color: theme === 'light' ? '#92400e' : '#fbbf24'
            }}
            className="p-4 rounded-lg border"
        >
            <div className="font-semibold">Context Consumer</div>
            <div className="text-sm">Current theme: {theme}</div>
        </motion.div>
    )
}

// useRef Example
function UseRefExample() {
    const [count, setCount] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const countRef = useRef(0)
    const [renderCount, setRenderCount] = useState(0)
    const { highlightLine, executeCode } = useCodeExecution()

    const focusInput = () => {
        executeCode([1, 2, 3]) // DOM manipulation with ref
        inputRef.current?.focus()
    }

    const updateRef = () => {
        executeCode([4, 5, 6]) // Ref update without re-render
        countRef.current += 1
        console.log('Ref value:', countRef.current)
    }

    const forceRender = () => {
        executeCode([7, 8, 9]) // State update triggers re-render
        setRenderCount(prev => prev + 1)
    }

    const handleStateUpdate = () => {
        executeCode([10, 11, 12]) // State update triggers re-render
        setCount(c => c + 1)
    }

    const useRefCode = [
        { line: 1, code: "const inputRef = useRef<HTMLInputElement>(null)", explanation: "DOM reference" },
        { line: 2, code: "const countRef = useRef(0)", explanation: "Mutable value" },
        { line: 3, code: "" },
        { line: 4, code: "const focusInput = () => {", explanation: "DOM manipulation" },
        { line: 5, code: "  inputRef.current?.focus() // No re-render" },
        { line: 6, code: "}" },
        { line: 7, code: "" },
        { line: 8, code: "const updateRef = () => {", explanation: "Ref update" },
        { line: 9, code: "  countRef.current += 1 // No re-render" },
        { line: 10, code: "  console.log('Ref value:', countRef.current)" },
        { line: 11, code: "}" },
        { line: 12, code: "" },
        { line: 13, code: "const handleStateUpdate = () => {", explanation: "State update" },
        { line: 14, code: "  setCount(c => c + 1) // Triggers re-render" },
        { line: 15, code: "}" },
        { line: 16, code: "" },
        { line: 17, code: "return (" },
        { line: 18, code: "  <div>" },
        { line: 19, code: "    <input ref={inputRef} />" },
        { line: 20, code: "    <span>Ref: {countRef.current}</span>" },
        { line: 21, code: "    <span>State: {count}</span>" },
        { line: 22, code: "  </div>" },
        { line: 23, code: ")" }
    ]

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-500" />
                        useRef Hook
                    </CardTitle>
                    <CardDescription>
                        Creates mutable references that persist across re-renders without causing updates
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 bg-red-50 rounded-lg border"
                        >
                            <h4 className="font-semibold mb-2">DOM Reference</h4>
                            <div className="space-y-2">
                                <Input
                                    ref={inputRef}
                                    placeholder="Click 'Focus Input' to focus me"
                                />
                                <Button onClick={focusInput} size="sm">
                                    Focus Input
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 bg-orange-50 rounded-lg border"
                        >
                            <h4 className="font-semibold mb-2">Mutable Value</h4>
                            <div className="space-y-2">
                                <div className="text-sm">
                                    Ref value: {countRef.current}
                                </div>
                                <div className="text-sm">
                                    State count: {count}
                                </div>
                                <div className="flex gap-2">
                                    <Button onClick={updateRef} size="sm" variant="outline">
                                        Update Ref
                                    </Button>
                                    <Button onClick={handleStateUpdate} size="sm">
                                        Update State
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Key Differences:</h4>
                        <ul className="text-sm space-y-1">
                            <li>• useRef doesn't trigger re-renders</li>
                            <li>• useRef persists between renders</li>
                            <li>• useRef can hold DOM elements</li>
                            <li>• useRef can store mutable values</li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <Button onClick={forceRender} variant="outline">
                            Force Re-render (Render #{renderCount})
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <CodeExecutionVisualizer
                title="useRef Code Execution"
                description="Watch refs update without triggering re-renders"
                codeLines={useRefCode}
            />
        </div>
    )
}

// useMemo Example
function UseMemoExample() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [expensiveCalculation, setExpensiveCalculation] = useState(false)
    const { highlightLine, executeCode } = useCodeExecution()

    // Simulate expensive calculation
    const expensiveValue = useMemo(() => {
        if (!expensiveCalculation) {
            executeCode([1, 2]) // Early return
            return 0
        }

        executeCode([3, 4, 5, 6, 7]) // Expensive calculation
        console.log('Running expensive calculation...')
        let result = 0
        for (let i = 0; i < 1000000; i++) {
            result += Math.random()
        }
        return Math.floor(result)
    }, [count, expensiveCalculation])

    const memoizedText = useMemo(() => {
        executeCode([8, 9, 10]) // Text processing
        return `Processed: ${text.toUpperCase()}`
    }, [text])

    const handleCountIncrement = () => {
        executeCode([11, 12, 13]) // State update
        setCount(c => c + 1)
    }

    const handleTextChange = (value: string) => {
        executeCode([14, 15, 16]) // State update
        setText(value)
    }

    const handleCalculationToggle = () => {
        executeCode([17, 18, 19]) // State update
        setExpensiveCalculation(!expensiveCalculation)
    }

    const useMemoCode = [
        { line: 1, code: "const expensiveValue = useMemo(() => {", explanation: "Memoized calculation" },
        { line: 2, code: "  if (!expensiveCalculation) return 0", explanation: "Early return" },
        { line: 3, code: "  console.log('Running expensive calculation...')" },
        { line: 4, code: "  let result = 0" },
        { line: 5, code: "  for (let i = 0; i < 1000000; i++) {", explanation: "Expensive loop" },
        { line: 6, code: "    result += Math.random()" },
        { line: 7, code: "  }" },
        { line: 8, code: "  return Math.floor(result)" },
        { line: 9, code: "}, [count, expensiveCalculation]) // Dependencies" },
        { line: 10, code: "" },
        { line: 11, code: "const memoizedText = useMemo(() => {", explanation: "Text memoization" },
        { line: 12, code: "  return `Processed: ${text.toUpperCase()}`" },
        { line: 13, code: "}, [text]) // Only depends on text" },
        { line: 14, code: "" },
        { line: 15, code: "// Only re-calculates when dependencies change" },
        { line: 16, code: "// Prevents unnecessary expensive operations" }
    ]

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-indigo-500" />
                        useMemo Hook
                    </CardTitle>
                    <CardDescription>
                        Memoizes expensive calculations to prevent unnecessary re-computations
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 bg-indigo-50 rounded-lg border"
                        >
                            <h4 className="font-semibold mb-2">Expensive Calculation</h4>
                            <div className="space-y-2">
                                <div className="text-sm">Count: {count}</div>
                                <div className="text-sm">Result: {expensiveValue}</div>
                                <div className="flex gap-2">
                                    <Button
                                        onClick={handleCountIncrement}
                                        size="sm"
                                    >
                                        Increment Count
                                    </Button>
                                    <Button
                                        onClick={handleCalculationToggle}
                                        size="sm"
                                        variant="outline"
                                    >
                                        {expensiveCalculation ? 'Disable' : 'Enable'} Calculation
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 bg-purple-50 rounded-lg border"
                        >
                            <h4 className="font-semibold mb-2">Text Processing</h4>
                            <div className="space-y-2">
                                <Input
                                    value={text}
                                    onChange={(e) => handleTextChange(e.target.value)}
                                    placeholder="Type something..."
                                />
                                <div className="text-sm font-mono bg-gray-100 p-2 rounded">
                                    {memoizedText}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Performance Benefits:</h4>
                        <ul className="text-sm space-y-1">
                            <li>• Expensive calculation only runs when dependencies change</li>
                            <li>• Text processing is memoized based on input</li>
                            <li>• Check console to see when calculations run</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <CodeExecutionVisualizer
                title="useMemo Code Execution"
                description="Watch expensive calculations run only when dependencies change"
                codeLines={useMemoCode}
            />
        </div>
    )
}

// useCallback Example
function UseCallbackExample() {
    const [count, setCount] = useState(0)
    const [items, setItems] = useState<string[]>([])
    const { highlightLine, executeCode } = useCodeExecution()

    const addItem = useCallback((item: string) => {
        executeCode([1, 2, 3]) // Memoized function execution
        setItems(prev => [...prev, item])
    }, [])

    const removeItem = useCallback((index: number) => {
        executeCode([4, 5, 6]) // Memoized function execution
        setItems(prev => prev.filter((_, i) => i !== index))
    }, [])

    const expensiveOperation = useCallback(() => {
        executeCode([7, 8, 9]) // Memoized function execution
        console.log('Expensive operation executed')
        return count * 2
    }, [count])

    const handleCountIncrement = () => {
        executeCode([10, 11, 12]) // State update
        setCount(c => c + 1)
    }

    const handleAddItem = (item: string) => {
        executeCode([13, 14, 15]) // Function call
        addItem(item)
    }

    const handleRemoveItem = (index: number) => {
        executeCode([16, 17, 18]) // Function call
        removeItem(index)
    }

    const useCallbackCode = [
        { line: 1, code: "const addItem = useCallback((item) => {", explanation: "Memoized function" },
        { line: 2, code: "  setItems(prev => [...prev, item])" },
        { line: 3, code: "}, []) // Empty dependency array" },
        { line: 4, code: "" },
        { line: 5, code: "const removeItem = useCallback((index) => {", explanation: "Memoized function" },
        { line: 6, code: "  setItems(prev => prev.filter((_, i) => i !== index))" },
        { line: 7, code: "}, []) // Empty dependency array" },
        { line: 8, code: "" },
        { line: 9, code: "const expensiveOperation = useCallback(() => {", explanation: "Memoized with deps" },
        { line: 10, code: "  console.log('Expensive operation executed')" },
        { line: 11, code: "  return count * 2" },
        { line: 12, code: "}, [count]) // Depends on count" },
        { line: 13, code: "" },
        { line: 14, code: "// Functions are memoized and don't change on every render" },
        { line: 15, code: "// Prevents unnecessary re-renders of child components" }
    ]

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Timer className="w-5 h-5 text-teal-500" />
                        useCallback Hook
                    </CardTitle>
                    <CardDescription>
                        Memoizes functions to prevent unnecessary re-renders of child components
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 bg-teal-50 rounded-lg border"
                        >
                            <h4 className="font-semibold mb-2">Item Management</h4>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Add item..."
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter' && e.currentTarget.value) {
                                                handleAddItem(e.currentTarget.value)
                                                e.currentTarget.value = ''
                                            }
                                        }}
                                    />
                                </div>
                                <div className="space-y-1 max-h-32 overflow-y-auto">
                                    {items.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="flex justify-between items-center p-2 bg-white rounded border"
                                        >
                                            <span className="text-sm">{item}</span>
                                            <Button
                                                onClick={() => handleRemoveItem(index)}
                                                size="sm"
                                                variant="outline"
                                            >
                                                ×
                                            </Button>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 bg-cyan-50 rounded-lg border"
                        >
                            <h4 className="font-semibold mb-2">Counter & Operation</h4>
                            <div className="space-y-2">
                                <div className="text-sm">Count: {count}</div>
                                <div className="text-sm">Result: {expensiveOperation()}</div>
                                <Button
                                    onClick={handleCountIncrement}
                                    size="sm"
                                >
                                    Increment
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">useCallback Benefits:</h4>
                        <ul className="text-sm space-y-1">
                            <li>• Functions are memoized and don't change on every render</li>
                            <li>• Prevents unnecessary re-renders of child components</li>
                            <li>• Only re-creates when dependencies change</li>
                            <li>• Essential for performance optimization</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <CodeExecutionVisualizer
                title="useCallback Code Execution"
                description="Watch memoized functions prevent unnecessary re-renders"
                codeLines={useCallbackCode}
            />
        </div>
    )
} 