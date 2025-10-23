import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Login
        </h1>
        <form className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border-0 bg-white px-4 py-2 text-base text-zinc-950 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-zinc-800 dark:placeholder:text-zinc-500"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border-0 bg-white px-4 py-2 text-base text-zinc-950 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-zinc-800 dark:placeholder:text-zinc-500"
          />
          <Button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-base text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </Button>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-indigo-600 hover:text-indigo-700"
            >
              Register
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
