import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    GitBranch,
    Sun,
    Moon,
    Cloud,
    CloudRain,
    Snowflake,
    Zap,
    Heart,
    Star,
    CheckCircle,
    XCircle,
    Eye,
    EyeOff,
    User,
    Lock,
    Mail,
    Phone,
    Home,
    School,
    Coffee,
    Pizza,
    IceCream,
    Gamepad2,
    BookOpen,
    Music,
    Video,
    Camera,
    Smile,
    Frown,
    Meh
} from 'lucide-react'
import { CodeExecutionVisualizer, useCodeExecution } from '@/components/visualizations/CodeExecutionVisualizer'

export function Conditional() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
            >
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Conditional Rendering</h1>
                    <p className="text-muted-foreground">Show different content based on conditions - like a smart traffic light! 🚦</p>
                </div>
            </motion.div>

            <Tabs defaultValue="weather" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="weather">🌤️ Weather</TabsTrigger>
                    <TabsTrigger value="login">🔐 Login</TabsTrigger>
                    <TabsTrigger value="mood">😊 Mood</TabsTrigger>
                    <TabsTrigger value="advanced">⚡ Advanced</TabsTrigger>
                </TabsList>

                <TabsContent value="weather" className="space-y-4">
                    <WeatherExample />
                </TabsContent>

                <TabsContent value="login" className="space-y-4">
                    <LoginExample />
                </TabsContent>

                <TabsContent value="mood" className="space-y-4">
                    <MoodExample />
                </TabsContent>

                <TabsContent value="advanced" className="space-y-4">
                    <AdvancedExample />
                </TabsContent>
            </Tabs>
        </div>
    )
}

// Weather Example - Super intuitive for high schoolers
function WeatherExample() {
    const [weather, setWeather] = useState('sunny')
    const [temperature, setTemperature] = useState(25)
    const [isDay, setIsDay] = useState(true)
    const { executeCode } = useCodeExecution()

    const weatherOptions = [
        { value: 'sunny', icon: Sun, color: 'text-yellow-500', bg: 'bg-yellow-50', name: 'Sunny' },
        { value: 'cloudy', icon: Cloud, color: 'text-gray-500', bg: 'bg-gray-50', name: 'Cloudy' },
        { value: 'rainy', icon: CloudRain, color: 'text-blue-500', bg: 'bg-blue-50', name: 'Rainy' },
        { value: 'snowy', icon: Snowflake, color: 'text-blue-300', bg: 'bg-blue-50', name: 'Snowy' },
        { value: 'stormy', icon: Zap, color: 'text-purple-500', bg: 'bg-purple-50', name: 'Stormy' }
    ]

    const handleWeatherChange = (newWeather: string) => {
        executeCode([1, 2, 3, 4, 5]) // State update triggers re-render
        setWeather(newWeather)
    }

    const handleTemperatureChange = (newTemp: number) => {
        executeCode([6, 7, 8, 9]) // Temperature affects clothing
        setTemperature(newTemp)
    }

    const handleTimeChange = (isDayTime: boolean) => {
        executeCode([10, 11, 12]) // Day/night affects activities
        setIsDay(isDayTime)
    }

    const weatherCode = [
        { line: 1, code: "const [weather, setWeather] = useState('sunny')", explanation: "Track weather condition" },
        { line: 2, code: "const [temperature, setTemperature] = useState(25)", explanation: "Track temperature" },
        { line: 3, code: "const [isDay, setIsDay] = useState(true)", explanation: "Track time of day" },
        { line: 4, code: "" },
        { line: 5, code: "// Conditional rendering based on weather", explanation: "Show different content" },
        { line: 6, code: "if (weather === 'sunny') {", explanation: "Sunny weather condition" },
        { line: 7, code: "  return <SunnyWeather />" },
        { line: 8, code: "} else if (weather === 'rainy') {", explanation: "Rainy weather condition" },
        { line: 9, code: "  return <RainyWeather />" },
        { line: 10, code: "} else {", explanation: "Default case" },
        { line: 11, code: "  return <OtherWeather />" },
        { line: 12, code: "}" }
    ]

    const getClothing = () => {
        if (temperature > 30) return "T-shirt and shorts! 🩳"
        if (temperature > 20) return "Light jacket 👕"
        if (temperature > 10) return "Warm sweater 🧥"
        return "Winter coat and hat! 🧤"
    }

    const getActivity = () => {
        if (!isDay) return "Time to sleep! 😴"
        if (weather === 'sunny' && temperature > 20) return "Perfect for a picnic! 🧺"
        if (weather === 'rainy') return "Stay inside and read a book 📚"
        if (weather === 'snowy') return "Build a snowman! ⛄"
        return "Maybe watch a movie? 🎬"
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sun className="w-5 h-5 text-yellow-500" />
                        Weather App - Show Different Content Based on Conditions
                    </CardTitle>
                    <CardDescription>
                        Just like how you dress differently for different weather, React shows different content for different conditions!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Weather Selection */}
                    <div className="space-y-4">
                        <Label className="text-lg font-semibold">🌤️ Choose the Weather:</Label>
                        <div className="grid grid-cols-5 gap-2">
                            {weatherOptions.map((option) => {
                                const Icon = option.icon
                                return (
                                    <motion.button
                                        key={option.value}
                                        onClick={() => handleWeatherChange(option.value)}
                                        className={`p-4 rounded-lg border-2 transition-all ${weather === option.value
                                            ? 'border-blue-500 bg-blue-50 scale-105'
                                            : 'border-gray-200 hover:border-gray-300'
                                            } ${option.bg}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className={`w-8 h-8 mx-auto ${option.color}`} />
                                        <div className="text-sm font-medium mt-2">{option.name}</div>
                                    </motion.button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Temperature Slider */}
                    <div className="space-y-2">
                        <Label className="text-lg font-semibold">🌡️ Temperature: {temperature}°C</Label>
                        <input
                            type="range"
                            min="-10"
                            max="40"
                            value={temperature}
                            onChange={(e) => handleTemperatureChange(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    {/* Day/Night Toggle */}
                    <div className="flex items-center space-x-4">
                        <Label className="text-lg font-semibold">🌙 Time of Day:</Label>
                        <div className="flex items-center space-x-2">
                            <Sun className={`w-5 h-5 ${isDay ? 'text-yellow-500' : 'text-gray-400'}`} />
                            <Switch
                                checked={!isDay}
                                onCheckedChange={handleTimeChange}
                            />
                            <Moon className={`w-5 h-5 ${!isDay ? 'text-blue-500' : 'text-gray-400'}`} />
                        </div>
                    </div>

                    {/* Conditional Content Display */}
                    <motion.div
                        key={`${weather}-${temperature}-${isDay}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200"
                    >
                        <div className="text-center space-y-4">
                            <motion.div
                                initial={{ scale: 0.5, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className="text-6xl"
                            >
                                {weatherOptions.find(w => w.value === weather)?.icon &&
                                    React.createElement(weatherOptions.find(w => w.value === weather)!.icon, {
                                        className: `w-20 h-20 mx-auto ${weatherOptions.find(w => w.value === weather)!.color}`
                                    })
                                }
                            </motion.div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {weatherOptions.find(w => w.value === weather)?.name} Weather
                                </h3>
                                <p className="text-lg text-gray-600">
                                    <strong>What to wear:</strong> {getClothing()}
                                </p>
                                <p className="text-lg text-gray-600">
                                    <strong>What to do:</strong> {getActivity()}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </CardContent>
            </Card>

            <CodeExecutionVisualizer
                title="Weather Conditional Rendering Code"
                description="Watch how different weather conditions show different content"
                codeLines={weatherCode}
            />
        </div>
    )
}

// Login Example - Real-world scenario
function LoginExample() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loginAttempts, setLoginAttempts] = useState(0)
    const { executeCode } = useCodeExecution()

    const handleLogin = () => {
        executeCode([1, 2, 3, 4, 5]) // Login logic
        if (username === 'student' && password === 'password') {
            setIsLoggedIn(true)
            setLoginAttempts(0)
        } else {
            setLoginAttempts(prev => prev + 1)
        }
    }

    const handleLogout = () => {
        executeCode([6, 7, 8]) // Logout logic
        setIsLoggedIn(false)
        setUsername('')
        setPassword('')
    }

    const loginCode = [
        { line: 1, code: "const [isLoggedIn, setIsLoggedIn] = useState(false)", explanation: "Track login status" },
        { line: 2, code: "const [username, setUsername] = useState('')", explanation: "Track username" },
        { line: 3, code: "const [password, setPassword] = useState('')", explanation: "Track password" },
        { line: 4, code: "" },
        { line: 5, code: "// Conditional rendering based on login status", explanation: "Show different content" },
        { line: 6, code: "if (isLoggedIn) {", explanation: "User is logged in" },
        { line: 7, code: "  return <Dashboard />" },
        { line: 8, code: "} else {", explanation: "User is not logged in" },
        { line: 9, code: "  return <LoginForm />" },
        { line: 10, code: "}" }
    ]

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Lock className="w-5 h-5 text-green-500" />
                        Login System - Show Different Screens Based on Login Status
                    </CardTitle>
                    <CardDescription>
                        Just like how your phone shows different screens when locked vs unlocked!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <AnimatePresence mode="wait">
                        {isLoggedIn ? (
                            <motion.div
                                key="dashboard"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200"
                            >
                                <div className="text-center space-y-4">
                                    <motion.div
                                        initial={{ scale: 0.5 }}
                                        animate={{ scale: 1 }}
                                        className="text-6xl"
                                    >
                                        🎉
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-green-800">
                                        Welcome back, {username}! 👋
                                    </h3>
                                    <p className="text-lg text-gray-600">
                                        You're now logged in and can access all features!
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        <div className="p-4 bg-white rounded-lg border">
                                            <Mail className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                                            <div className="text-sm font-medium">Messages</div>
                                        </div>
                                        <div className="p-4 bg-white rounded-lg border">
                                            <User className="w-8 h-8 mx-auto text-purple-500 mb-2" />
                                            <div className="text-sm font-medium">Profile</div>
                                        </div>
                                        <div className="p-4 bg-white rounded-lg border">
                                            <Home className="w-8 h-8 mx-auto text-green-500 mb-2" />
                                            <div className="text-sm font-medium">Home</div>
                                        </div>
                                    </div>
                                    <Button
                                        onClick={handleLogout}
                                        variant="outline"
                                        className="mt-4"
                                    >
                                        Logout
                                    </Button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="login"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-2 border-gray-200"
                            >
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <Lock className="w-12 h-12 mx-auto text-gray-500 mb-4" />
                                        <h3 className="text-xl font-bold text-gray-800">
                                            Please Log In
                                        </h3>
                                        <p className="text-gray-600">
                                            Use username: "student" and password: "password"
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <div>
                                            <Label htmlFor="username">Username:</Label>
                                            <Input
                                                id="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="Enter username..."
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="password">Password:</Label>
                                            <div className="relative">
                                                <Input
                                                    id="password"
                                                    type={showPassword ? "text" : "password"}
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Enter password..."
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="absolute right-0 top-0 h-full px-3"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={handleLogin}
                                        className="w-full"
                                        disabled={loginAttempts >= 3}
                                    >
                                        {loginAttempts >= 3 ? 'Too Many Attempts' : 'Login'}
                                    </Button>

                                    {loginAttempts > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-center text-red-500"
                                        >
                                            ❌ Login failed! Try again. (Attempts: {loginAttempts}/3)
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>

            <CodeExecutionVisualizer
                title="Login Conditional Rendering Code"
                description="Watch how login status determines what content to show"
                codeLines={loginCode}
            />
        </div>
    )
}

// Mood Example - Fun and relatable
function MoodExample() {
    const [mood, setMood] = useState('happy')
    const [energy, setEnergy] = useState(7)
    const [timeOfDay, setTimeOfDay] = useState('morning')
    const { executeCode } = useCodeExecution()

    const moodOptions = [
        { value: 'happy', icon: Smile, color: 'text-yellow-500', name: 'Happy 😊', bg: 'bg-yellow-50' },
        { value: 'sad', icon: Frown, color: 'text-blue-500', name: 'Sad 😢', bg: 'bg-blue-50' },
        { value: 'neutral', icon: Meh, color: 'text-gray-500', name: 'Neutral 😐', bg: 'bg-gray-50' },
        { value: 'excited', icon: Star, color: 'text-purple-500', name: 'Excited ⭐', bg: 'bg-purple-50' }
    ]

    const timeOptions = [
        { value: 'morning', name: '🌅 Morning', bg: 'bg-orange-50' },
        { value: 'afternoon', name: '☀️ Afternoon', bg: 'bg-yellow-50' },
        { value: 'evening', name: '🌆 Evening', bg: 'bg-pink-50' },
        { value: 'night', name: '🌙 Night', bg: 'bg-blue-50' }
    ]

    const handleMoodChange = (newMood: string) => {
        executeCode([1, 2, 3]) // Mood affects recommendations
        setMood(newMood)
    }

    const handleEnergyChange = (newEnergy: number) => {
        executeCode([4, 5, 6]) // Energy affects activities
        setEnergy(newEnergy)
    }

    const handleTimeChange = (newTime: string) => {
        executeCode([7, 8, 9]) // Time affects suggestions
        setTimeOfDay(newTime)
    }

    const moodCode = [
        { line: 1, code: "const [mood, setMood] = useState('happy')", explanation: "Track current mood" },
        { line: 2, code: "const [energy, setEnergy] = useState(7)", explanation: "Track energy level" },
        { line: 3, code: "const [timeOfDay, setTimeOfDay] = useState('morning')", explanation: "Track time" },
        { line: 4, code: "" },
        { line: 5, code: "// Conditional recommendations based on mood", explanation: "Smart suggestions" },
        { line: 6, code: "if (mood === 'happy' && energy > 5) {", explanation: "High energy happy" },
        { line: 7, code: "  return <HighEnergyHappy />" },
        { line: 8, code: "} else if (mood === 'sad') {", explanation: "Sad mood" },
        { line: 9, code: "  return <SadMood />" },
        { line: 10, code: "} else {", explanation: "Default case" },
        { line: 11, code: "  return <NeutralMood />" },
        { line: 12, code: "}" }
    ]

    const getRecommendation = () => {
        if (mood === 'happy' && energy > 7) {
            return "🎉 Perfect time for a party or outdoor adventure!"
        } else if (mood === 'happy' && energy > 5) {
            return "😊 Great for hanging out with friends or doing something fun!"
        } else if (mood === 'sad') {
            return "😢 Maybe watch a funny movie or talk to a friend?"
        } else if (mood === 'excited') {
            return "⭐ You're on fire! Time to tackle that big project!"
        } else if (energy < 3) {
            return "😴 Feeling tired? Maybe take a nap or relax?"
        } else {
            return "😐 How about trying something new or learning a skill?"
        }
    }

    const getActivity = () => {
        if (timeOfDay === 'morning' && mood === 'happy') {
            return "☀️ Perfect morning! Start your day with exercise!"
        } else if (timeOfDay === 'night' && energy < 5) {
            return "🌙 Getting late, time to wind down and prepare for bed!"
        } else if (mood === 'excited') {
            return "🚀 You're pumped! Channel that energy into something productive!"
        } else {
            return "💡 How about some music or a creative activity?"
        }
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />
                        Mood Tracker - Smart Recommendations Based on How You Feel
                    </CardTitle>
                    <CardDescription>
                        Just like how your phone suggests different apps based on time, React shows different content based on your mood!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Mood Selection */}
                    <div className="space-y-4">
                        <Label className="text-lg font-semibold">😊 How are you feeling today?</Label>
                        <div className="grid grid-cols-4 gap-3">
                            {moodOptions.map((option) => {
                                const Icon = option.icon
                                return (
                                    <motion.button
                                        key={option.value}
                                        onClick={() => handleMoodChange(option.value)}
                                        className={`p-4 rounded-lg border-2 transition-all ${mood === option.value
                                            ? 'border-pink-500 bg-pink-50 scale-105'
                                            : 'border-gray-200 hover:border-gray-300'
                                            } ${option.bg}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className={`w-8 h-8 mx-auto ${option.color} mb-2`} />
                                        <div className="text-sm font-medium">{option.name}</div>
                                    </motion.button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Energy Level */}
                    <div className="space-y-2">
                        <Label className="text-lg font-semibold">⚡ Energy Level: {energy}/10</Label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={energy}
                            onChange={(e) => handleEnergyChange(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>😴 Tired</span>
                            <span>🚀 Energized</span>
                        </div>
                    </div>

                    {/* Time of Day */}
                    <div className="space-y-3">
                        <Label className="text-lg font-semibold">🕐 What time is it?</Label>
                        <div className="grid grid-cols-4 gap-2">
                            {timeOptions.map((option) => (
                                <motion.button
                                    key={option.value}
                                    onClick={() => handleTimeChange(option.value)}
                                    className={`p-3 rounded-lg border-2 transition-all ${timeOfDay === option.value
                                        ? 'border-blue-500 bg-blue-50 scale-105'
                                        : 'border-gray-200 hover:border-gray-300'
                                        } ${option.bg}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="text-sm font-medium">{option.name}</div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Conditional Recommendations */}
                    <motion.div
                        key={`${mood}-${energy}-${timeOfDay}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border-2 border-pink-200"
                    >
                        <div className="text-center space-y-4">
                            <motion.div
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                className="text-6xl"
                            >
                                {moodOptions.find(m => m.value === mood)?.icon &&
                                    React.createElement(moodOptions.find(m => m.value === mood)!.icon, {
                                        className: `w-16 h-16 mx-auto ${moodOptions.find(m => m.value === mood)!.color}`
                                    })
                                }
                            </motion.div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {moodOptions.find(m => m.value === mood)?.name}
                                </h3>
                                <div className="p-4 bg-white rounded-lg border">
                                    <p className="text-lg text-gray-700">
                                        <strong>💡 Recommendation:</strong> {getRecommendation()}
                                    </p>
                                </div>
                                <div className="p-4 bg-white rounded-lg border">
                                    <p className="text-lg text-gray-700">
                                        <strong>🎯 Activity Suggestion:</strong> {getActivity()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </CardContent>
            </Card>

            <CodeExecutionVisualizer
                title="Mood Conditional Rendering Code"
                description="Watch how mood, energy, and time create smart recommendations"
                codeLines={moodCode}
            />
        </div>
    )
}

// Advanced Example - Multiple conditions
function AdvancedExample() {
    const [userType, setUserType] = useState('student')
    const [age, setAge] = useState(16)
    const [hasPermission, setHasPermission] = useState(false)
    const [isPremium, setIsPremium] = useState(false)
    const { executeCode } = useCodeExecution()

    const userTypes = [
        { value: 'student', name: '👨‍🎓 Student', bg: 'bg-blue-50' },
        { value: 'teacher', name: '👩‍🏫 Teacher', bg: 'bg-green-50' },
        { value: 'admin', name: '👨‍💼 Admin', bg: 'bg-purple-50' },
        { value: 'guest', name: '👤 Guest', bg: 'bg-gray-50' }
    ]

    const handleUserTypeChange = (type: string) => {
        executeCode([1, 2, 3]) // User type affects permissions
        setUserType(type)
        // Auto-set permissions based on user type
        if (type === 'admin') {
            setHasPermission(true)
            setIsPremium(true)
        } else if (type === 'teacher') {
            setHasPermission(true)
            setIsPremium(false)
        } else {
            setHasPermission(false)
            setIsPremium(false)
        }
    }

    const handleAgeChange = (newAge: number) => {
        executeCode([4, 5, 6]) // Age affects content
        setAge(newAge)
    }

    const advancedCode = [
        { line: 1, code: "const [userType, setUserType] = useState('student')", explanation: "Track user type" },
        { line: 2, code: "const [age, setAge] = useState(16)", explanation: "Track user age" },
        { line: 3, code: "const [hasPermission, setHasPermission] = useState(false)", explanation: "Track permissions" },
        { line: 4, code: "const [isPremium, setIsPremium] = useState(false)", explanation: "Track premium status" },
        { line: 5, code: "" },
        { line: 6, code: "// Complex conditional rendering", explanation: "Multiple conditions" },
        { line: 7, code: "if (userType === 'admin' && isPremium) {", explanation: "Admin with premium" },
        { line: 8, code: "  return <AdminDashboard />" },
        { line: 9, code: "} else if (userType === 'teacher' && hasPermission) {", explanation: "Teacher with permission" },
        { line: 10, code: "  return <TeacherDashboard />" },
        { line: 11, code: "} else if (age >= 18 && isPremium) {", explanation: "Adult premium user" },
        { line: 12, code: "  return <PremiumContent />" },
        { line: 13, code: "} else if (age >= 13) {", explanation: "Teen user" },
        { line: 14, code: "  return <StudentContent />" },
        { line: 15, code: "} else {", explanation: "Default case" },
        { line: 16, code: "  return <RestrictedContent />" },
        { line: 17, code: "}" }
    ]

    const getContent = () => {
        if (userType === 'admin' && isPremium) {
            return {
                title: "🔐 Admin Dashboard",
                content: "Full access to all features, user management, and system settings!",
                color: "bg-purple-100 border-purple-300",
                features: ["User Management", "System Settings", "Analytics", "Full Access"]
            }
        } else if (userType === 'teacher' && hasPermission) {
            return {
                title: "👩‍🏫 Teacher Dashboard",
                content: "Access to class management, student progress, and teaching tools!",
                color: "bg-green-100 border-green-300",
                features: ["Class Management", "Student Progress", "Teaching Tools", "Limited Admin"]
            }
        } else if (age >= 18 && isPremium) {
            return {
                title: "⭐ Premium Content",
                content: "Exclusive premium features for adult users!",
                color: "bg-yellow-100 border-yellow-300",
                features: ["Premium Features", "Advanced Tools", "Priority Support", "Exclusive Content"]
            }
        } else if (age >= 13) {
            return {
                title: "👨‍🎓 Student Content",
                content: "Educational content appropriate for students!",
                color: "bg-blue-100 border-blue-300",
                features: ["Learning Materials", "Quizzes", "Progress Tracking", "Safe Content"]
            }
        } else {
            return {
                title: "🚫 Restricted Content",
                content: "Limited access for younger users with parental guidance!",
                color: "bg-gray-100 border-gray-300",
                features: ["Basic Features", "Safe Content", "Parental Controls", "Limited Access"]
            }
        }
    }

    const content = getContent()

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-purple-500" />
                        Advanced Conditional Rendering - Multiple Conditions
                    </CardTitle>
                    <CardDescription>
                        Real apps use multiple conditions to show different content - just like how Netflix shows different movies based on your age, subscription, and preferences!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* User Type Selection */}
                    <div className="space-y-4">
                        <Label className="text-lg font-semibold">👤 What type of user are you?</Label>
                        <div className="grid grid-cols-4 gap-3">
                            {userTypes.map((type) => (
                                <motion.button
                                    key={type.value}
                                    onClick={() => handleUserTypeChange(type.value)}
                                    className={`p-4 rounded-lg border-2 transition-all ${userType === type.value
                                        ? 'border-purple-500 bg-purple-50 scale-105'
                                        : 'border-gray-200 hover:border-gray-300'
                                        } ${type.bg}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="text-sm font-medium">{type.name}</div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Age Slider */}
                    <div className="space-y-2">
                        <Label className="text-lg font-semibold">🎂 Age: {age} years old</Label>
                        <input
                            type="range"
                            min="5"
                            max="25"
                            value={age}
                            onChange={(e) => handleAgeChange(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>👶 Child</span>
                            <span>👨‍🎓 Teen</span>
                            <span>👨‍💼 Adult</span>
                        </div>
                    </div>

                    {/* Status Indicators */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg border">
                            <div className="flex items-center justify-between">
                                <span className="font-medium">Permissions:</span>
                                <Badge variant={hasPermission ? "default" : "secondary"}>
                                    {hasPermission ? <CheckCircle className="w-4 h-4 mr-1" /> : <XCircle className="w-4 h-4 mr-1" />}
                                    {hasPermission ? "Granted" : "Denied"}
                                </Badge>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border">
                            <div className="flex items-center justify-between">
                                <span className="font-medium">Premium:</span>
                                <Badge variant={isPremium ? "default" : "secondary"}>
                                    {isPremium ? <Star className="w-4 h-4 mr-1" /> : <XCircle className="w-4 h-4 mr-1" />}
                                    {isPremium ? "Active" : "Inactive"}
                                </Badge>
                            </div>
                        </div>
                    </div>

                    {/* Conditional Content */}
                    <motion.div
                        key={`${userType}-${age}-${hasPermission}-${isPremium}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-6 rounded-lg border-2 ${content.color}`}
                    >
                        <div className="text-center space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800">
                                {content.title}
                            </h3>
                            <p className="text-lg text-gray-700">
                                {content.content}
                            </p>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                {content.features.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-3 bg-white rounded-lg border text-sm font-medium"
                                    >
                                        {feature}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </CardContent>
            </Card>

            <CodeExecutionVisualizer
                title="Advanced Conditional Rendering Code"
                description="Watch how multiple conditions work together to show the right content"
                codeLines={advancedCode}
            />
        </div>
    )
} 