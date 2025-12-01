import type { FAQItem, Feature, HeroProps, Step, Plan } from "../types";

export const faqData: FAQItem[] = [
  {
    question: "How does the free trial work?",
    answer: "You can use all Pro features for 14 days without providing credit card information.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can upgrade, downgrade or cancel your plan at any time from your dashboard.",
  },
  {
    question: "Do you offer support?",
    answer: "We offer 24/7 support for Pro and Business customers.",
  },
  {
    question: "Is there a free plan?",
    answer: "Yes, our Starter plan is completely free with basic features.",
  },
  {
    question: "Do you offer team accounts?",
    answer: "Yes, Business plans allow you to invite unlimited team members.",
  },
];

export const features: Feature[] = [
  {
    id: 1,
    icon: "CheckCircle",
    title: "Drag & Drop Tasks",
    description: "Organize your tasks easily with drag and drop functionality.",
  },
  {
    id: 2,
    icon: "Calendar",
    title: "Automatic Reminders",
    description: "Never miss a deadline with smart reminders.",
  },
  {
    id: 3,
    icon: "Users",
    title: "Client Management",
    description: "Keep all your clients and projects in one place.",
  },
];


export const heroData: HeroProps = {
  title: "Organize your work. Boost your productivity.",
  subtitle: "Flowly hjælper freelancere med at styre opgaver, kunder og deadlines.",
};

export const steps: Step[] = [
    {
        id: 1,
        title: "Create an account",
        description: "Sign up and get started in seconds."
    },
    {
        id: 2,
        title: "Add your tasks",
        description: "Easily create and organize your tasks."
    },
    {
        id: 3,
        title: "Track your progress",
        description: "Monitor your productivity and deadlines."
    }
];

export const plans: Plan[] = [
    {
        id: 1,
        name: "Starter",
        price: "0 Kr",
        features: ["Basic task management", "1 project", "Email support"],
        isBest: false,
    },
    {
        id: 2,
        name: "Pro",
        price: "79 kr/måned",
        features: ["Unlimited projects", "Priority support", "Analytics dashboard"],
        isBest: true,
    },
    {
        id: 3,
        name: "Business",
        price: "299 kr/måned",
        features: ["Team management", "Advanced analytics", "Dedicated account manager"],
        isBest: false,
    }
];
