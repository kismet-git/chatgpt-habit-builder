"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, ChevronRight, Lightbulb, MessageSquare, Target } from "lucide-react"

const dailyTasks = [
  {
    day: 1,
    title: "Personal Assistant",
    description: "Start with simple daily planning and organization",
    prompt:
      "Help me plan my day. I have a meeting at 2pm, need to grocery shop, and want to exercise. What's an efficient schedule?",
    tips: [
      "Be specific about your constraints (time, location, preferences)",
      "Include context about your goals or priorities",
      "Ask for alternatives if the first suggestion doesn't work",
    ],
    followUps: [
      "Can you suggest healthy meal prep ideas for this week?",
      "What are some 15-minute exercises I can do at home?",
      "Help me create a morning routine that energizes me",
    ],
    completed: false,
  },
  {
    day: 2,
    title: "Learning Buddy",
    description: "Use ChatGPT to explain concepts and answer questions",
    prompt: "Explain [topic you're curious about] in simple terms, like I'm a beginner. Use examples I can relate to.",
    tips: [
      "Ask for explanations at your level (beginner, intermediate, advanced)",
      "Request examples and analogies to make concepts clearer",
      "Don't hesitate to ask follow-up questions for clarification",
    ],
    followUps: [
      "Can you give me 3 practical ways to apply this knowledge?",
      "What are common mistakes beginners make with this topic?",
      "Suggest some beginner-friendly resources to learn more",
    ],
    completed: false,
  },
  {
    day: 3,
    title: "Creative Partner",
    description: "Brainstorm ideas and overcome creative blocks",
    prompt:
      "I need creative ideas for [your project/challenge]. Here's my situation: [brief context]. Give me 5 unique approaches.",
    tips: [
      "Provide context about your audience, goals, and constraints",
      "Ask for multiple options to choose from",
      "Be open to unexpected or unconventional suggestions",
    ],
    followUps: [
      "Help me develop idea #3 into a detailed plan",
      "What potential challenges might I face with this approach?",
      "Can you suggest ways to make this idea more original?",
    ],
    completed: false,
  },
  {
    day: 4,
    title: "Writing Coach",
    description: "Improve your writing and communication skills",
    prompt:
      "Help me write a [type of message] to [audience]. The key points I want to cover are: [list your points]. Make it [tone: professional/friendly/persuasive].",
    tips: [
      "Specify your audience and the tone you want to achieve",
      "Provide key points you want to include",
      "Ask for multiple versions to compare different approaches",
    ],
    followUps: [
      "Can you make this more concise while keeping the main message?",
      "How can I make the opening more engaging?",
      "What's a good subject line for this email?",
    ],
    completed: false,
  },
  {
    day: 5,
    title: "Problem Solver",
    description: "Break down challenges into manageable steps",
    prompt:
      "I'm facing this challenge: [describe your problem]. Help me break it down into smaller, actionable steps I can tackle one by one.",
    tips: [
      "Describe the problem clearly with relevant background",
      "Mention any constraints or resources you have",
      "Ask for prioritization of steps if there are many",
    ],
    followUps: [
      "What's the most important step to focus on first?",
      "What resources or tools might help me with step 2?",
      "How can I track my progress on this plan?",
    ],
    completed: false,
  },
  {
    day: 6,
    title: "Decision Helper",
    description: "Get structured help with choices and decisions",
    prompt:
      "I need to decide between [option A] and [option B] for [context]. Help me create a pros and cons list, considering factors like [mention 2-3 important factors].",
    tips: [
      "Clearly state all your options",
      "Mention the factors that matter most to you",
      "Ask for additional considerations you might have missed",
    ],
    followUps: [
      "Based on this analysis, which option would you recommend and why?",
      "What questions should I ask myself before making this decision?",
      "How can I test or validate my choice before fully committing?",
    ],
    completed: false,
  },
  {
    day: 7,
    title: "Habit Architect",
    description: "Design sustainable routines and track progress",
    prompt:
      "Help me create a simple habit-building plan for [habit you want to build]. I have [time available] and my biggest challenge is usually [mention your obstacle].",
    tips: [
      "Start small - focus on consistency over intensity",
      "Mention your current schedule and constraints",
      "Be honest about past challenges with similar habits",
    ],
    followUps: [
      "What are some ways to make this habit more enjoyable?",
      "How should I handle days when I don't feel motivated?",
      "Can you suggest a simple tracking method for this habit?",
    ],
    completed: false,
  },
]

export default function ChatGPTHabitBuilder() {
  const [tasks, setTasks] = useState(dailyTasks)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [showTips, setShowTips] = useState<number | null>(null)

  const toggleTask = (day: number) => {
    setTasks(tasks.map((task) => (task.day === day ? { ...task, completed: !task.completed } : task)))
  }

  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold text-gray-900">ChatGPT Habit Builder</h1>
              <p className="text-sm text-gray-600">7-Day Challenge</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#0422FF]">{completedCount}/7</div>
              <div className="text-xs text-gray-500">completed</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-md mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#0422FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Build Your ChatGPT Habit</h2>
            <p className="text-gray-600 leading-relaxed">
              Master AI conversations in just 7 days. Each day focuses on one practical use case with beginner-friendly
              tips and follow-up prompts.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round((completedCount / 7) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#0422FF] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedCount / 7) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Tasks */}
      <section className="max-w-md mx-auto px-4 pb-8">
        <div className="space-y-4">
          {tasks.map((task) => (
            <Card key={task.day} className="border border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs font-medium">
                        Day {task.day}
                      </Badge>
                      <button
                        onClick={() => toggleTask(task.day)}
                        className="text-[#0422FF] hover:text-[#0422FF]/80 transition-colors"
                      >
                        {task.completed ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                      </button>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">{task.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-1">{task.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Sample Prompt */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-[#0422FF]" />
                    <span className="text-sm font-medium text-gray-700">Sample Prompt</span>
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">"{task.prompt}"</p>
                </div>

                {/* Tips Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTips(showTips === task.day ? null : task.day)}
                  className="w-full justify-between text-[#0422FF] hover:text-[#0422FF]/80 hover:bg-[#0422FF]/5 mb-3"
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>Beginner Tips & Follow-ups</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${showTips === task.day ? "rotate-90" : ""}`}
                  />
                </Button>

                {/* Expandable Tips */}
                {showTips === task.day && (
                  <div className="space-y-4 border-t border-gray-100 pt-4">
                    {/* Tips */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">💡 Prompt Tips</h4>
                      <ul className="space-y-1">
                        {task.tips.map((tip, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-[#D7E022] mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Follow-ups */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">🔄 Follow-up Prompts</h4>
                      <div className="space-y-2">
                        {task.followUps.map((followUp, index) => (
                          <div key={index} className="bg-white border border-gray-200 rounded-lg p-3">
                            <p className="text-sm text-gray-700">"{followUp}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Completion Message */}
        {completedCount === 7 && (
          <Card className="mt-8 border-[#0422FF] bg-[#0422FF]/5">
            <CardContent className="text-center py-8">
              <div className="w-16 h-16 bg-[#0422FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Congratulations! 🎉</h3>
              <p className="text-gray-600 mb-4">
                You've completed the 7-Day ChatGPT Habit Builder! You now have practical experience with AI
                conversations.
              </p>
              <Button className="bg-[#0422FF] hover:bg-[#0422FF]/90 text-white">Continue Your AI Journey</Button>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  )
}
