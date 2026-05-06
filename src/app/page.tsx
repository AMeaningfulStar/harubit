import Link from "next/link";

export default function RootPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-semibold">하루빛</h1>
      <p className="text-sm text-zinc-600">MVP 라우팅 진입 페이지</p>
      <Link className="text-sm font-medium underline" href="/home">
        홈으로 이동
      </Link>
    </main>
  );
}
