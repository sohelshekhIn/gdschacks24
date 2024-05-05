const { CohereClient } = require("cohere-ai");
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

const firebaseConfig = {
  // Your Firebase project configuration
  apiKey: process.env.NEXT_PUBLIC_FIREABSE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREABSE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var chat_history: object[] = [];

const getCoursePlan = async (data: { topic: string }) => {
  console.log("Starting getCoursePlan");

  const prompt = `You are an Educator, and you are given this topic "${data.topic}"
Help me by creating a detailed course plan and outline with modules (exact 6 modules) and lessons so that I can learn properly.`;
  const response = await cohere.chat({
    message: prompt,
  });
  return response;
};

const getCourseContent = async (
  moduleNumber: number,
  chatHistory: object[]
) => {
  console.log("Starting getCourseContent");

  const prompt = `Now give me actual detailed course content from Module ${moduleNumber} (if possible include images from the internet through markdown)
the answer should only be in Markdown`;
  const response = await cohere.chat({
    chat_history: chatHistory,
    message: prompt,
  });
  chat_history.push(response.chat_history);
  return response.text;
};

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);

  if (data) {
    const course_plan = await getCoursePlan(data);

    // simaltaneously get course content for each module and add to firestore
    const saveCoursePlan = await setDoc(doc(db, "courses", data.uid), {
      course_plan: course_plan.text,
    });
    const contentResults: string[] = [];
    for (let i = 1; i <= 2; i++) {
      const ccontent = await getCourseContent(i, course_plan);
      contentResults.push(ccontent);
    }

    console.log(chat_history);
    console.log(contentResults);

    // console.log("cplan");
    // console.log(chat_history);

    //
    // console.log("after loop");
    // console.log(chat_history);

    // var courseContent = "";
    // chat_history.forEach((item: any) => {
    //   if (item.role == "CHATBOT") {
    //     courseContent += item.text + "\n\n";
    //   }
    // });
    // console.log(courseContent);

    // await setDoc(doc(db, "courses", data.topic), { content: courseContent });
    return new Response("Course content added successfully", { status: 200 });
  } else {
    return new Response("Error adding course content", { status: 500 });
  }
}
