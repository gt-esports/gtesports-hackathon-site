"use client"

import { useEffect, useState } from "react"
import { Survey } from "survey-react-ui"
import { Model } from "survey-core"
import "survey-core/survey-core.min.css"
import "../index.css"
import { surveyJson } from "../data/appQuestions"

export default function SurveyComponent() {
  const [model, setModel] = useState(() => new Model(surveyJson))

  // --- Hot reload fix ---
  const [modelKey, setModelKey] = useState("prod")
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      setModelKey(Date.now().toString())
    }
  }, [])

  useEffect(() => {
    async function checkStatus() {
      try {
        //restful API endpoint to get application status
        // if exists, make model to be in the display mode
      } catch (err) {
        console.error("Failed to load application status", err);
      }
    }
    checkStatus();
  }, [model]);

  useEffect(() => {
    if (typeof window !== "undefined" && (import.meta as any).hot) {
      (import.meta as any).hot.accept(() => {
        window.location.reload()
      })
    }
  }, [])

  useEffect(() => {
    const handleComplete = async (sender: any) => {
      const data = sender.data
      try {
        console.log("Application submitted:", data)
        alert("Application submitted successfully!")
      } catch (err: any) {
        console.error("Failed to submit application:", err)
        if (err.response?.status === 401) {
          alert("Session expired. Please log in again.")
          window.location.href = "/login"
        } else {
          alert("Failed to submit application. Please contact support.")
        }
      }
    }
    model.onComplete.add(handleComplete)
    return () => {
      model.onComplete.remove(handleComplete)
    }
  }, [model])

  return (
    <div className="max-w-3xl mx-auto my-10 p-8 rounded-3xl shadow-2xl bg-gradient-to-br">
      <Survey model={model} key={modelKey} />
    </div>
  )
}
