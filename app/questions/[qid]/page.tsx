import { QUESTIONS_DATA } from "../../../lib/questionsData";
import { QuestionPageClient } from "./QuestionPageClient";

export function generateStaticParams() {
  return QUESTIONS_DATA.map((q) => ({
    qid: `q${q.id}`,
  }));
}

interface QuestionPageProps {
  params: Promise<{ qid: string }>;
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { qid } = await params;
  return <QuestionPageClient qid={qid} />;
}

