export const surveyJson = {
  title: "TechHack Valley Application",
  description: "Please complete your application. You will not be able to edit after submission.",
  logoWidth: "230px",
  logoHeight: "auto",
  pages: [
    {
      name: "page1",
      title: "Application",
      elements: [
        {
          type: "text",
          name: "github",
          title: "GitHub Profile URL:",
          placeHolder: "https://github.com/yourusername",
          inputType: "url",
          isRequired: true,
          validators: [
            {
              type: "regex",
              regex: "^(https?://)?(www\\.)?github\\.com/.+",
              text: "Please enter a valid GitHub profile link."
            }
          ]
        },
        {
          type: "text",
          name: "linkedin",
          title: "LinkedIn Profile URL:",
          placeHolder: "https://www.linkedin.com/in/yourprofile",
          inputType: "url",
          isRequired: true,
          validators: [
            {
              type: "regex",
              regex: "^(https?://)?(www\\.)?linkedin\\.com/.*",
              text: "Please enter a valid LinkedIn URL."
            }
          ]
        },
        {
          type: "comment",
          name: "interest",
          title: "Why are you interested in joining TechHack Valley?",
          placeHolder: "Tell us why you want to apply in 2–3 sentences",
          isRequired: true
        }
      ]
    },
    {
      name: "confirmation",
      title: "Final Confirmation",
      elements: [
        {
          type: "checkbox",
          name: "final_confirm",
          title: "Please confirm your submission:",
          choices: [
            {
              value: "yes",
              text: "I confirm my answers are accurate and understand that after submitting, the application becomes read-only."
            }
          ],
          isRequired: true
        }
      ]
    }
  ],
  headerView: "advanced"
};
