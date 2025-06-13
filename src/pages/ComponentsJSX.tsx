import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { CodeEditor } from '@/components/common/CodeEditor'
import { ComponentTree } from '@/components/visualizations/ComponentTree'
import {
    Code,
    Eye,
    Play,
    CheckCircle,
    Info,
    ArrowRight,
    FileCode
} from 'lucide-react'

const defaultCode = `function Welcome() {
  return (
    <div className="welcome-card">
      <h1>Hello, React!</h1>
      <p>This is a React component</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Welcome />
      <Welcome />
    </div>
  );
}`

const jsxExample = `// JSX allows you to write HTML-like code in JavaScript
const element = (
  <div className="greeting">
    <h1>Hello, World!</h1>
    <p>Welcome to React</p>
  </div>
);

// This gets transformed to:
const element = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('h1', null, 'Hello, World!'),
  React.createElement('p', null, 'Welcome to React')
);`

export function ComponentsJSX() {
    const [code, setCode] = useState(defaultCode)
    const [showOutput, setShowOutput] = useState(false)

    const handleCodeChange = (newCode: string) => {
        setCode(newCode)
        setShowOutput(true)
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3"
                >
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Components & JSX</h1>
                        <p className="text-muted-foreground">Learn about React components and JSX syntax</p>
                    </div>
                </motion.div>

                <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                        Components are the building blocks of React applications. They let you split the UI into independent,
                        reusable pieces. JSX is a syntax extension for JavaScript that allows you to write HTML-like code.
                    </AlertDescription>
                </Alert>
            </div>

            {/* Main Content */}
            <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="interactive">Interactive</TabsTrigger>
                    <TabsTrigger value="visualization">Visualization</TabsTrigger>
                    <TabsTrigger value="practice">Practice</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileCode className="w-5 h-5" />
                                    What are Components?
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Components are reusable pieces of UI that can contain their own logic and styling.
                                    They accept inputs called "props" and return React elements describing what should appear on the screen.
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Key Concepts:</h4>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li>• Components are functions that return JSX</li>
                                        <li>• They can be reused throughout your app</li>
                                        <li>• They can accept props as parameters</li>
                                        <li>• They can contain their own state and logic</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Code className="w-5 h-5" />
                                    What is JSX?
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    JSX is a syntax extension for JavaScript that allows you to write HTML-like code directly in your JavaScript files.
                                    It gets transformed into regular JavaScript function calls.
                                </p>
                                <div className="bg-muted p-4 rounded-lg">
                                    <pre className="text-sm overflow-x-auto">
                                        <code>{jsxExample}</code>
                                    </pre>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="interactive" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Play className="w-5 h-5" />
                                Interactive Code Editor
                            </CardTitle>
                            <CardDescription>
                                Edit the code below and see how it affects the component structure
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CodeEditor
                                code={code}
                                onChange={handleCodeChange}
                                language="jsx"
                                height="400px"
                            />
                        </CardContent>
                    </Card>

                    {showOutput && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Eye className="w-5 h-5" />
                                        Component Output
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="border rounded-lg p-4 bg-muted/50">
                                        <div className="app">
                                            <div className="welcome-card p-4 border rounded mb-2">
                                                <h1 className="text-xl font-bold">Hello, React!</h1>
                                                <p>This is a React component</p>
                                            </div>
                                            <div className="welcome-card p-4 border rounded">
                                                <h1 className="text-xl font-bold">Hello, React!</h1>
                                                <p>This is a React component</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </TabsContent>

                <TabsContent value="visualization" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Eye className="w-5 h-5" />
                                Component Tree Visualization
                            </CardTitle>
                            <CardDescription>
                                See how your components are structured in a visual tree
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ComponentTree code={code} />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="practice" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Practice Challenge
                            </CardTitle>
                            <CardDescription>
                                Create a component that displays a user profile card
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <h4 className="font-semibold">Challenge:</h4>
                                <p className="text-muted-foreground">
                                    Create a <code>UserProfile</code> component that accepts <code>name</code>, <code>email</code>,
                                    and <code>avatar</code> props and displays them in a nice card layout.
                                </p>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                                <h4 className="font-semibold">Requirements:</h4>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li>• Component should accept props</li>
                                    <li>• Display name in a heading</li>
                                    <li>• Show email in a paragraph</li>
                                    <li>• Include an avatar image (optional)</li>
                                    <li>• Use proper JSX syntax</li>
                                </ul>
                            </div>

                            <Button className="w-full">
                                Start Challenge
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
} 