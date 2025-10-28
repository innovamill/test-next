import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      className="rounded-lg border bg-card p-6"
      action={async () => {
        "use server";
        await signIn("cognito");
      }}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Authentication</h3>
          <p className="text-sm text-muted-foreground">
            Sign in with your Cognito account
          </p>
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Signin with Cognito
        </button>
      </div>
    </form>
  );
}
