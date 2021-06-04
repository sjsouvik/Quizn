import { Data } from "./quizData.types";

export const quizData: Data = {
  name: "Quick Quiz",
  quizzes: [
    {
      _id: 1,
      title: "Web Tech",
      image:
        "https://img-c.udemycdn.com/course/240x135/781532_8b4d_6.jpg?Expires=1622272027&Signature=hTQ3T4U5fWw8vihO5PFAydCTfxmAJL5rq3Vey94ZGCdwMEfjozEwfkhr7urXHcm4eeqsE3IYVl0iIbi6pTzslvnWX0cxKuosneZmVOHjwMx0qL8Q-gTWUJzrGg00HRfnPkfaF6jOS~MFdKDcIGibHPpKxr4T3Y5Xn5QkvjUlWzdNxuLhzFxnuLxnXQcasyMqly2wXGQpIxSSYD59SgYB~U50EBmbPTK-K8cGtdhsZo7m9-sGig8ttc3eyl5HAg3soaKlnwADxNvnsr1ySG-f3ReL2nH5GHrW5cSJYjIjXvH5EoB5qNvi-z63svxyXq3rL1Eg4fReJATfWD714zJdrw__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      questions: [
        {
          question: "What is the full form HTML?",
          options: [
            {
              value: "Hypertext Markup Language",
              isCorrect: true,
            },
            {
              value: "Hypertext Manipulate Language",
              isCorrect: false,
            },
            {
              value: "Hypertext Makeup Language",
              isCorrect: false,
            },
          ],
          point: 10,
          selectedOption: null,
        },
        {
          question: "What is the full form HTTP?",
          options: [
            {
              value: "Hypertext Transfer Protocol",
              isCorrect: true,
            },
            {
              value: "Hypertext Transmission Protocol",
              isCorrect: false,
            },
            {
              value: "Hypertext Transition Protocol",
              isCorrect: false,
            },
          ],
          point: 10,
          selectedOption: null,
        },
        {
          question: "What is the full form CSS?",
          options: [
            {
              value: "Common Style Sheet",
              isCorrect: false,
            },
            {
              value: "Colourful Style Sheet",
              isCorrect: false,
            },
            {
              value: "Cascading Style Sheet",
              isCorrect: true,
            },
          ],
          point: 10,
          selectedOption: null,
        },
      ],
    },
    {
      _id: 2,
      title: "JavaScript",
      image:
        "https://img-b.udemycdn.com/course/240x135/1743420_0062.jpg?secure=MY5sM2AVemYLzy_X0AemSQ%3D%3D%2C1622272382",
      questions: [
        {
          question: "Inside which HTML element do we put the JavaScript?",
          options: [
            {
              value: "<scripting>",
              isCorrect: false,
            },
            {
              value: "<script>",
              isCorrect: true,
            },
            {
              value: "<javascript>",
              isCorrect: false,
            },
          ],
          point: 10,
          selectedOption: null,
        },
        {
          question: "Where is the correct place to insert a JavaScript?",
          options: [
            {
              value: "The <head> section",
              isCorrect: false,
            },
            {
              value: "The <body> section",
              isCorrect: false,
            },
            {
              value: "Both the <head> section and <body> section are correct",
              isCorrect: true,
            },
          ],
          point: 10,
          selectedOption: null,
        },
        {
          question: "What is the full form JS?",
          options: [
            {
              value: "JarScript",
              isCorrect: false,
            },
            {
              value: "JavaScript",
              isCorrect: true,
            },
            {
              value: "JestScript",
              isCorrect: false,
            },
          ],
          point: 10,
          selectedOption: null,
        },
      ],
    },
  ],
};
