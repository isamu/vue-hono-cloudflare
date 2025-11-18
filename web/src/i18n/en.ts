import languages from "./languages";

const lang = {
  message: {
    hello: "hello world",
  },
  menu: {
    top: "Home",
    mypage: "MyPage",
    signin: "SignIn",
    signout: "SignOut",
    about: "Abount",
  },
  about: {
    title: "About This Starter Kit",
    description:
      "This is a production-ready starter kit combining Vue 3, Hono, and Cloudflare Workers. It includes TypeScript, Tailwind CSS v4, shadcn-vue components, and Vue I18n for internationalization.",
    techStack: {
      title: "Technology Stack",
      frontend: "Frontend: Vue 3.5 + TypeScript + Vite + Tailwind CSS v4",
      backend: "Backend: Hono 4.10 on Cloudflare Workers",
      ui: "UI: shadcn-vue components (Reka UI based)",
      i18n: "i18n: Vue I18n with English and Japanese support",
    },
    getStarted: {
      title: "Get Started",
      step1: "Clone this repository",
      step2: "Run 'yarn install' to install dependencies",
      step3: "Run 'yarn dev' to start the development server",
      step4: "Customize and build your application",
    },
  },
  filmFes: {
    title: "Sample Festival Page",
  },
  festival: {
    subtitle: "MulmoCast AI Short Film Festival",
    about: {
      title: "About the Festival",
      description:
        "MulmoCast AI Short Film Festival is an event that accepts and showcases video works created using AI. Why not challenge yourself to create new forms of visual expression with your creativity and the power of MulmoCast?",
    },
    applicationMethod: {
      title: "How to Apply",
      step1: "Upload your work to YouTube (unlisted is allowed)",
      step2: "Submit the following information via the application form (Google Form)",
      requirements: {
        title: "Work title",
        youtubeLink: "YouTube link",
        creator: "Creator name (individual/team name)",
        contact: "Contact information",
        script: "MulmoScript file (.json format)",
      },
    },
    eligibility: {
      title: "Eligibility Requirements",
      items: [
        "Applicants must be 18 years or older (minors are generally not eligible, except with individual permission from the organizer)",
        "Work must be created using MulmoCast",
        "Multiple submissions not allowed",
        "Team submissions allowed",
        "Concurrent applications to other contests not allowed",
        "Overseas applications accepted (prize money subject to separate arrangements)",
      ],
    },
    results: {
      title: "Results Announcement",
      items: [
        "Scheduled to be announced on YouTube Live in {date}",
        "Planned to be broadcast on TECH WORLD channel + other channels",
        "Participation limited to online",
      ],
      date: "mid-December",
    },
    latestInfo: {
      title: "Latest Information",
      description:
        "Details and application form are now available {eventLink}. For the latest information, please check our X account {twitterLink}.",
      eventLinkText: "here",
      twitterHandle: "{'@'}mulmocast",
    },
    backButton: "Back to Home",
  },
  navigation: {
    home: "Home",
    about: "About",
    openMenu: "Open menu",
  },
  faq: {
    title: "FAQ",
    subtitle: "Frequently Asked Questions",
    copyLink: "Copy link",
    linkCopied: "Link copied to clipboard!",
    items: [
      {
        question: "What is MulmoCast?",
        answer:
          "MulmoCast is a multimodal presentation tool that automatically generates images and narration audio using AI, completing your video just by writing a script.",
      },
      {
        question: "Does it cost money?",
        answer:
          "The application itself is free to use. However, you will need API Keys from providers such as OpenAI / Google / Anthropic. There are costs associated with using those APIs.",
      },
      {
        question: "What platforms is it available on?",
        answer: "Available on MacOS, Windows, and as a CLI tool.",
      },
      {
        question: "What can it be used for?",
        answer:
          "It can be used for various purposes including short videos, student reports and class presentations, business proposals and planning documents.",
      },
      {
        question:
          'I\'m getting an error "Image generation (OpenAI) error: Please complete organization verification to use the gpt-image-1 model..." during image generation. What should I do?',
        answer:
          "To use the gpt-image-1 model, you need to complete organization verification (Verify Organization) on your OpenAI account. This is a separate procedure from paid plans like ChatGPT Plus.",
      },
      {
        question: "Where do I complete organization verification, and is there a fee for Persona?",
        answer: "No payment is required for Persona. You can complete it by following the steps below:",
        stepsLabel: "Steps:",
        steps: [
          "Go to the {organizationSettingsPage} and click the 'Verify Organization' button.",
          "Follow the on-screen instructions to complete identity verification (using Persona).",
        ],
        organizationSettingsPageText: "OpenAI Platform's organization settings page",
        note: "Persona is the identity verification service used by OpenAI. There is no charge to the user for Persona.",
        support:
          "※ If identity verification repeatedly fails, please contact {openaiSupport}. You can reach them from the Help Center (chat icon in the bottom right corner).",
        openaiSupportText: "OpenAI support",
        alternative: {
          title: "■ Using the dall-e-3 model",
          description:
            "If you do not wish to use the `gpt-image-1` model, you can use `dall-e-3` instead. Please change the settings as follows:",
          stepsLabel: "Steps:",
          steps: [
            "Navigate to Style Settings Tab → Image Parameters.",
            "Ensure Provider is set to 'OpenAI'.",
            "Change Model from 'auto' to 'dall-e-3'.",
          ],
        },
      },
      {
        question: "The generated video doesn't match my expectations. What should I do?",
        answer:
          "MulmoCast generates movies by combining generated images with movie generation prompts. If no images are generated, the movie is created using only the movie generation prompt.\n\nTo generate movies closer to your intended result, please try one of the following methods:",
        methods: [
          "Generate images first, then set movie generation prompts based on those images",
          "Provide detailed visual instructions in the movie generation prompt (such as scene content, movement details, etc.)",
        ],
      },
      {
        question: "The latter half of the movie becomes a still image. What should I do?",
        answer:
          "When the audio length (text volume) exceeds the movie generation time, the latter half is displayed as a still image.\n\nDepending on the movie generation model you use, there is a time limit for each movie generation. For example, when using Google (Veo3), movies are generated with a fixed duration of 8 seconds.\n\nIn this case, please adjust using one of the following methods:",
        methods: [
          "Accept that the latter half becomes a still image",
          "Adjust the audio length (text volume) and divide it to fit within the movie generation time",
        ],
      },
      {
        question: "Can I display a slide without narration (image only) for a specified duration?",
        answer:
          "Yes, you can. In Advanced Mode, you can specify the display duration for each beat. Please follow these steps:",
        steps: ["Switch to Advanced Mode", "Open the JSON tab", 'Add "duration: seconds" to the corresponding beat'],
        exampleLabel: "Example:",
        noteLabel: "Note:",
        example: `{'{'}\n  "speaker": "Presenter",\n  "text": "",\n  "image": {'{'}\n    "type": "textSlide",\n    "slide": {'{'}\n      "title": "no audio slide + duration",\n      "bullets": [\n        "duration 5"\n      ]\n    {'}'}\n  {'}'},\n  "duration": 5\n{'}'}`,
        exampleNote: "In this example, the slide without narration will be displayed for 5 seconds.",
        note: "When adding duration, remember to add a comma (,) at the end of the previous item (the image object in this example).",
      },
      {
        question: "The movie generated from the movie prompt gets cut off midway. What should I do?",
        answer:
          "When generating a movie using a movie generation prompt, MulmoCast trims the video based on the audio length when combining audio and video. Therefore, if the generated video is longer than the audio, the video may be cut off at the end of the audio.\n\nIn this case, add audioParams.padding in Advanced Mode to create padding at the end of the audio.\n\nPlease follow these steps:",
        steps: [
          "Switch to Advanced Mode",
          "Open the JSON tab",
          'Add "audioParams.padding: seconds" to the corresponding beat',
        ],
        exampleLabel: "Example:",
        noteLabel: "Note:",
        example: `{'{'}\n  "speaker": "Presenter",\n  "text": "This beat has audio. add padding 6.",\n  "audioParams": {'{'}\n    "padding": 6\n  {'}'},\n  "moviePrompt": "Four shots in rapid succession: art, anime, documentary, and promotional style.",\n  "enableLipSync": false\n{'}'}`,
        exampleNote: "In this example, 6 seconds of padding is added to the end of the audio.",
        note: "When adding audioParams, remember to add a comma (,) at the end of the previous item.",
      },
    ],
    backButton: "Back to Home",
  },
  home: {
    hero: {
      title: "Vue + Hono + Cloudflare",
      subtitle: "Modern Full-Stack Starter Kit",
      description: "Build fast, scalable applications",
      description2: "with {emphasize}.",
      emphasize: "Vue 3, Hono, and Cloudflare Workers",
    },
    features: {
      title: "Features",
      items: [
        "Vue 3 with TypeScript and Tailwind CSS v4",
        "Hono API on Cloudflare Workers for serverless backend",
        "Internationalization (i18n) support with Vue I18n",
      ],
    },
    useCases: {
      title: "Perfect For",
      student: {
        label: "Side Projects:",
        description: "Quick setup with modern tech stack and best practices",
      },
      business: {
        label: "Production Apps:",
        description: "Scalable architecture with edge computing and global deployment",
      },
    },
  },
  languages,
};

export default lang;
