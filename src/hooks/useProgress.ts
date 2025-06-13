import { useState, useEffect } from 'react'
import { concepts, getProgress } from '@/data/concepts'
import type { Concept } from '@/data/concepts'

interface ProgressState {
    completed: string[]
    currentConcept: string | null
    totalTime: number
    lastAccessed: Date | null
}

const STORAGE_KEY = 'react-concepts-progress'

export function useProgress() {
    const [progress, setProgress] = useState<ProgressState>(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
            try {
                return JSON.parse(stored)
            } catch {
                // If stored data is invalid, start fresh
            }
        }
        return {
            completed: ['getting-started'],
            currentConcept: null,
            totalTime: 0,
            lastAccessed: null
        }
    })

    // Save progress to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    }, [progress])

    const markCompleted = (conceptId: string) => {
        setProgress(prev => ({
            ...prev,
            completed: prev.completed.includes(conceptId)
                ? prev.completed
                : [...prev.completed, conceptId]
        }))
    }

    const markIncomplete = (conceptId: string) => {
        setProgress(prev => ({
            ...prev,
            completed: prev.completed.filter(id => id !== conceptId)
        }))
    }

    const setCurrentConcept = (conceptId: string) => {
        setProgress(prev => ({
            ...prev,
            currentConcept: conceptId,
            lastAccessed: new Date()
        }))
    }

    const addTime = (minutes: number) => {
        setProgress(prev => ({
            ...prev,
            totalTime: prev.totalTime + minutes
        }))
    }

    const getConceptProgress = (conceptId: string) => {
        return {
            isCompleted: progress.completed.includes(conceptId),
            isCurrent: progress.currentConcept === conceptId,
            concept: concepts.find(c => c.id === conceptId)
        }
    }

    const getOverallProgress = () => {
        const { completed, total, percentage } = getProgress()
        return {
            completed,
            total,
            percentage,
            totalTime: progress.totalTime,
            lastAccessed: progress.lastAccessed
        }
    }

    const resetProgress = () => {
        setProgress({
            completed: ['getting-started'],
            currentConcept: null,
            totalTime: 0,
            lastAccessed: null
        })
    }

    return {
        progress,
        markCompleted,
        markIncomplete,
        setCurrentConcept,
        addTime,
        getConceptProgress,
        getOverallProgress,
        resetProgress
    }
} 