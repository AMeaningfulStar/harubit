"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";

interface SignupFormState {
  nickname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const initialFormState: SignupFormState = {
  nickname: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export default function SignupPage() {
  const [formState, setFormState] = useState<SignupFormState>(initialFormState);
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof SignupFormState, value: string) => {
    setFormState((currentState) => ({
      ...currentState,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (formState.password !== formState.passwordConfirmation) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    setErrorMessage("회원가입 연동은 다음 단계에서 연결됩니다.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-10 text-foreground">
      <section className="w-full max-w-sm">
        <div className="mb-8 space-y-2">
          <p className="text-sm font-medium text-zinc-500">Harubit</p>
          <h1 className="text-3xl font-semibold">회원가입</h1>
          <p className="text-sm leading-6 text-zinc-600">
            하루빛에서 말씀 읽기와 묵상 루틴을 시작할 계정을 준비합니다.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="nickname">
              이름 또는 닉네임
            </label>
            <input
              autoComplete="name"
              className="h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
              id="nickname"
              name="nickname"
              onChange={(event) => updateField("nickname", event.target.value)}
              placeholder="하루빛"
              type="text"
              value={formState.nickname}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              이메일
            </label>
            <input
              autoComplete="email"
              className="h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
              id="email"
              name="email"
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="name@example.com"
              type="email"
              value={formState.email}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="password">
              비밀번호
            </label>
            <input
              autoComplete="new-password"
              className="h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
              id="password"
              name="password"
              onChange={(event) => updateField("password", event.target.value)}
              placeholder="비밀번호"
              type="password"
              value={formState.password}
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium"
              htmlFor="passwordConfirmation"
            >
              비밀번호 확인
            </label>
            <input
              autoComplete="new-password"
              className="h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
              id="passwordConfirmation"
              name="passwordConfirmation"
              onChange={(event) =>
                updateField("passwordConfirmation", event.target.value)
              }
              placeholder="비밀번호 확인"
              type="password"
              value={formState.passwordConfirmation}
            />
          </div>

          <p
            aria-live="polite"
            className="min-h-5 text-sm text-red-600"
            role="status"
          >
            {errorMessage}
          </p>

          <button
            className="h-11 w-full rounded-md bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
            type="submit"
          >
            계정 만들기
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-600">
          이미 계정이 있나요?{" "}
          <Link className="font-medium text-zinc-950 underline" href="/login">
            로그인
          </Link>
        </p>
      </section>
    </main>
  );
}
