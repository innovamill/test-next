import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950 dark:via-black dark:to-purple-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-linear-to-br from-indigo-400/30 to-purple-400/30 blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-linear-to-tr from-purple-400/30 to-pink-400/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl dark:border-white/10 dark:bg-black/40 dark:shadow-indigo-500/10 p-12">
          {/* Logo/Title area */}
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-4xl font-bold tracking-tight bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              Welcome
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Sign in to continue to your account
            </p>
          </div>

          {/* Sign in form */}
          <form
            action={async () => {
              "use server";
              await signIn("cognito", { redirectTo: "/" });
            }}
            className="space-y-6"
          >
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-base font-semibold bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-xl"
            >
              Sign in
            </Button>
          </form>

          {/* Footer text */}
          <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-500">
            Secure authentication powered by AWS Cognito
          </p>
        </div>
      </div>
    </div>
  );
}
