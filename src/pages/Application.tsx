"use client"

import "../index.css"
import HackathonApplication from "../components/Application/HackathonApplication"

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-valley-cream py-10">
      <h1 className="text-4xl font-pixel text-center text-valley-green mb-4">
        Hacker Application
      </h1>
      <p className="font-pixel text-center text-valley-brown mb-8 max-w-2xl mx-auto px-4">
        If there's any issues or questions, then email <a href="mailto:georgiatechesports@gmail.com" className="text-valley-green hover:underline">georgiatechesports@gmail.com</a>
      </p>
      <HackathonApplication />
    </div>
  )
}
