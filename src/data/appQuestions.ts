export const surveyJson = {
  title: "TechHack Valley 2026 Application",
  description: "Please complete your application. You will not be able to edit after submission.",
  logoWidth: "230px",
  logoHeight: "auto",
  pages: [
    {
      name: "personal",
      title: "Personal Information",
      elements: [
        { type: "text", name: "full_name", title: "Full Name", isRequired: true },
        {
          type: "text",
          name: "email",
          title: "School Email",
          description: "This will be the email address where you receive all communications.",
          inputType: "email",
          isRequired: true,
          validators: [
            {
              type: "email",
              text: "Please enter a valid email address."
            }
          ]
        },
        { type: "text", name: "phone", title: "Phone Number", inputType: "tel", isRequired: true },
        {
          type: "text",
          name: "age",
          title: "How old will you be when the event starts?",
          inputType: "number",
          isRequired: true,
          validators: [
            {
              type: "numeric",
              minValue: 0,
              text: "Age must be a positive number."
            }
          ]
        },
        {
          type: "dropdown",
          name: "gender",
          title: "Gender",
          choices: ["Male", "Female", "Non-binary", "Prefer not to say", "Other"],
          isRequired: true
        },
        {
          type: "checkbox",
          name: "race",
          title: "Race/Ethnicity",
          choices: ["Asian", "Black/African American", "Hispanic/Latino", "White/Caucasian", "Native American", "Pacific Islander", "Prefer not to say"],
          showOtherItem: true,
          isRequired: true
        },
        { type: "text", name: "address", title: "Mailing Address (123 Street, City, State, Zip)", isRequired: true },
        {
          type: "checkbox",
          name: "dietary",
          title: "Dietary Restrictions",
          choices: ["Vegetarian", "Vegan", "Gluten-free", "Halal", "Kosher", "Nut Allergy"],
          showNoneItem: true,
          showOtherItem: true,
          isRequired: true
        },
        {
          type: "file",
          name: "resume",
          title: "Upload Resume",
          acceptedTypes: ".pdf",
          allowMultiple: false,
          maxSize: 2097152, // 2MB
          storeDataAsText: false
        }
      ]
    },
    {
      name: "academic",
      title: "Academic Information",
      elements: [
        {
          type: "dropdown",
          name: "education_level",
          title: "Current Education Level",
          choices: ["High School", "Undergraduate", "Graduate", "Bootcamp", "Other"],
          isRequired: true
        },
        {
          type: "boolean",
          name: "pursuing_degree",
          title: "Will you be pursuing an undergraduate degree at a university at the time of the event?",
          isRequired: true
        },
        { type: "text", name: "school", title: "College/University Attending", isRequired: true },
        { type: "text", name: "grad_year", title: "Graduation Year", inputType: "number", isRequired: true },
        { type: "text", name: "major", title: "Major/Field of Study", isRequired: true }
      ]
    },
    {
      name: "hackathon_logistics",
      title: "Hackathon Logistics",
      elements: [
        {
          type: "dropdown",
          name: "shirt_size",
          title: "Shirt Size",
          choices: ["XS", "S", "M", "L", "XL", "XXL"],
          isRequired: true
        },
        {
          type: "boolean",
          name: "first_hackathon",
          title: "Will TechHack be your first hackathon?",
          isRequired: true
        },
        {
          type: "boolean",
          name: "in_person",
          title: "TechHack is an in-person event in Atlanta, GA. Will you be able to attend in person?",
          isRequired: true
        },
        {
          type: "dropdown",
          name: "referral",
          title: "How did you learn about TechHack?",
          choices: ["Friend/Classmate", "Social Media", "University Email", "Hackathon Directory", "Other"],
          isRequired: true
        }
      ]
    },
    {
      name: "open_response",
      title: "Open Response",
      elements: [
        {
          type: "checkbox",
          name: "team_role",
          title: "What role serves your capabilities best on a hackathon team?",
          choices: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile Developer", "Designer", "Data Scientist", "Product Manager", "Other"],
          isRequired: true
        },
        {
          type: "dropdown",
          name: "cs_experience",
          title: "How much experience do you have with Computer Science?",
          choices: ["Beginner", "Intermediate", "Advanced", "Expert"],
          isRequired: true
        },
        {
          type: "comment",
          name: "interest_check",
          title: "What projects have you worked on in the past, or what do you hope to build at TechHack Valley?",
          isRequired: true
        }
      ]
    },
    {
      name: "agreements",
      title: "Agreements",
      elements: [
        {
          type: "checkbox",
          name: "communication_consent",
          title: "Communication Consent",
          choices: [
            { value: "agree", text: "I agree to receive emails and possible SMS regarding the event." }
          ],
          isRequired: true
        },
        {
          type: "checkbox",
          name: "final_consent",
          title: "Submission Agreement",
          choices: [
            { value: "agree", text: "I understand that once submitted, I cannot make changes to my application." }
          ],
          isRequired: true
        }
      ]
    }
  ],
  showProgressBar: "top",
  headerView: "advanced"
};
