import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Check, Sparkles, X, ChevronRight, FileText } from "lucide-react";
import Link from "next/link";

export default async function AiReportsList() {
  const { userId } = await auth();
  if (!userId) return null;

  const user = await prisma.user.findUnique({
    where: { clerkId: userId }
  });
  if (!user) return null;

  const reports = await prisma.aiDiagnosticReport.findMany({
    where: {
      submission: {
        userId: user.id
      }
    },
    include: {
      submission: {
        include: {
          test: true
        }
      }
    },
    orderBy: { createdAt: "desc" },
    take: 5
  });

  if (reports.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center mt-6">
        <Sparkles className="w-12 h-12 text-slate-300 mx-auto mb-3" />
        <h3 className="font-bold text-slate-900 mb-1">AI xulosalari yo'q</h3>
        <p className="text-sm text-slate-500">Testlarni ishlang va AI orqali tahlil oling.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-blue-500" /> Oxirgi AI Xulosalar
      </h2>
      <div className="grid gap-3">
        {reports.map((report) => (
          <Link 
            key={report.id} 
            href={`/results`} // For now it leads to results, user can expand there
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {report.submission.test.title} - AI xulosasi
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  {new Date(report.createdAt).toLocaleDateString("uz-UZ")}
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-slate-400">
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
