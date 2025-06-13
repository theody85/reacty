import Editor, { useMonaco } from '@monaco-editor/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Copy, RotateCcw, Play } from 'lucide-react'
import { toast } from 'sonner'
import { useEffect } from 'react'

interface CodeEditorProps {
    code: string
    onChange: (code: string) => void
    language?: string
    height?: string
    readOnly?: boolean
}

export function CodeEditor({
    code,
    onChange,
    language = 'javascript',
    height = '400px',
    readOnly = false
}: CodeEditorProps) {

    const monaco = useMonaco();

    useEffect(() => {
        // do conditional chaining
        monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
        // or make sure that it exists by other ways
        if (monaco) {
            console.log('here is the monaco instance:', monaco);
        }
    }, [monaco]);


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code)
            toast.success('Code copied to clipboard!')
        } catch (err) {
            toast.error('Failed to copy code')
        }
    }

    const handleReset = () => {
        // This would reset to the original code - for now just clear
        onChange('')
        toast.info('Code reset')
    }

    const handleRun = () => {
        toast.success('Code executed!')
        // In a real implementation, this would run the code in a sandbox
    }

    return (
        <Card>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Code Editor</CardTitle>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCopy}
                            className="h-8 px-3"
                        >
                            <Copy className="w-4 h-4 mr-1" />
                            Copy
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleReset}
                            className="h-8 px-3"
                        >
                            <RotateCcw className="w-4 h-4 mr-1" />
                            Reset
                        </Button>
                        <Button
                            size="sm"
                            onClick={handleRun}
                            className="h-8 px-3"
                        >
                            <Play className="w-4 h-4 mr-1" />
                            Run
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <Editor
                    height={height}
                    language={language}
                    value={code}
                    onChange={(value) => onChange(value || '')}
                    theme="vs-dark"
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: 'on',
                        roundedSelection: false,
                        scrollBeyondLastLine: false,
                        readOnly,
                        automaticLayout: true,
                        wordWrap: 'on',
                        folding: true,
                        lineDecorationsWidth: 10,
                        lineNumbersMinChars: 3,
                    }}
                />
            </CardContent>
        </Card>
    )
} 