export interface Concept {
    id: string
    title: string
    description: string
    href: string
    icon: string
    color: string
    completed: boolean
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    estimatedTime: number // in minutes
    topics: string[]
}

export const concepts: Concept[] = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        description: 'Welcome to React Concepts - Interactive Learning',
        href: '/',
        icon: 'Home',
        color: 'bg-blue-500',
        completed: true,
        difficulty: 'beginner',
        estimatedTime: 5,
        topics: ['Introduction', 'Setup', 'Overview']
    },
    {
        id: 'components-jsx',
        title: 'Components & JSX',
        description: 'Learn about React components and JSX syntax',
        href: '/components-jsx',
        icon: 'Code',
        color: 'bg-blue-500',
        completed: false,
        difficulty: 'beginner',
        estimatedTime: 15,
        topics: ['Components', 'JSX', 'Function Components', 'Component Structure']
    },
    {
        id: 'props-state',
        title: 'Props & State',
        description: 'Understand data flow in React applications',
        href: '/props-state',
        icon: 'Zap',
        color: 'bg-green-500',
        completed: false,
        difficulty: 'beginner',
        estimatedTime: 20,
        topics: ['Props', 'State', 'Data Flow', 'Component Communication']
    },
    {
        id: 'hooks',
        title: 'Hooks',
        description: 'Master React hooks for state and effects',
        href: '/hooks',
        icon: 'GitBranch',
        color: 'bg-purple-500',
        completed: false,
        difficulty: 'intermediate',
        estimatedTime: 25,
        topics: ['useState', 'useEffect', 'useContext', 'Custom Hooks']
    },
    {
        id: 'events',
        title: 'Event Handling',
        description: 'Handle user interactions and events',
        href: '/events',
        icon: 'MousePointer',
        color: 'bg-orange-500',
        completed: false,
        difficulty: 'beginner',
        estimatedTime: 15,
        topics: ['Event Handlers', 'Synthetic Events', 'Form Handling', 'User Interactions']
    },
    {
        id: 'conditional',
        title: 'Conditional Rendering',
        description: 'Render content based on conditions',
        href: '/conditional',
        icon: 'GitBranch',
        color: 'bg-pink-500',
        completed: false,
        difficulty: 'beginner',
        estimatedTime: 12,
        topics: ['Conditional Logic', 'Ternary Operators', 'Logical AND', 'Switch Statements']
    },
    {
        id: 'lists-keys',
        title: 'Lists & Keys',
        description: 'Work with dynamic lists and keys',
        href: '/lists-keys',
        icon: 'List',
        color: 'bg-indigo-500',
        completed: false,
        difficulty: 'beginner',
        estimatedTime: 18,
        topics: ['Array Methods', 'Keys', 'List Rendering', 'Performance']
    },
    {
        id: 'lifecycle',
        title: 'Component Lifecycle',
        description: 'Understand component lifecycle methods',
        href: '/lifecycle',
        icon: 'Clock',
        color: 'bg-red-500',
        completed: false,
        difficulty: 'intermediate',
        estimatedTime: 20,
        topics: ['Mounting', 'Updating', 'Unmounting', 'useEffect Dependencies']
    }
]

export const getConceptById = (id: string): Concept | undefined => {
    return concepts.find(concept => concept.id === id)
}

export const getNextConcept = (currentId: string): Concept | undefined => {
    const currentIndex = concepts.findIndex(concept => concept.id === currentId)
    return concepts[currentIndex + 1]
}

export const getPreviousConcept = (currentId: string): Concept | undefined => {
    const currentIndex = concepts.findIndex(concept => concept.id === currentId)
    return concepts[currentIndex - 1]
}

export const getProgress = () => {
    const completed = concepts.filter(concept => concept.completed).length
    return {
        completed,
        total: concepts.length,
        percentage: Math.round((completed / concepts.length) * 100)
    }
} 