"use client"
import React, { useEffect, useState } from "react"
import { RadioButton } from "primereact/radiobutton"
import { Panel } from "primereact/panel"
import { Fieldset } from "primereact/fieldset"
import { Button } from "primereact/button"
import axios from "axios"
import { API_ENDPOINTS } from "@/app/api/losbackend/api"

const SurveyPage = () => {
  const [survey, setSurvey] = useState([])
  const [formData, setFormData] = useState({})

  const handleRadioChange = (e, fieldName) => {
    setFormData(prev => ({ ...prev, [fieldName]: e.value }))
  }

  const handleSave = () => {
    console.log("Saving survey responses:", formData)
    alert("Survey responses saved successfully!")
  }

  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GETSURVEY)
        setSurvey(response.data)
      } catch (error) {
        console.error("There was an error fetching the survey!", error)
      }
    }
    fetchSurvey()
  }, [])

  return (
    <div className="p-4">
      <Panel header="Survey Form">
        {survey.map((question, index) => (
          <Fieldset
            legend={question.title}
            key={index}
            style={{ marginTop: "20px" }}
          >
            {question.pilihan_survey.map((pilihan, indexpilihan) => (
              <div
                className="flex"
                style={{ marginBottom: "10px" }}
                key={indexpilihan}
              >
                <RadioButton
                  name={`question_${question.title}`}
                  value={pilihan.pertanyaan}
                  onChange={e =>
                    handleRadioChange(e, `pertanyaan ${question.title}`)
                  }
                  checked={
                    formData[`pertanyaan ${question.title}`] ===
                    pilihan.pertanyaan
                  }
                />
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px"
                  }}
                >
                  {pilihan.pertanyaan}
                </label>
              </div>
            ))}
          </Fieldset>
        ))}
        <Button label="Save" icon="pi pi-check" onClick={handleSave} />
      </Panel>
    </div>
  )
}

export default SurveyPage
