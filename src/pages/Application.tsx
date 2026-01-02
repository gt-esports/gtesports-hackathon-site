"use client"

import "../index.css"
import HackathonApplication from "../components/Application/HackathonApplication"

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-valley-cream py-10">
      <h1 className="text-4xl font-pixel text-center text-valley-green mb-8">
        Hacker Application
      </h1>
      <HackathonApplication />
    </div>
  )
}
