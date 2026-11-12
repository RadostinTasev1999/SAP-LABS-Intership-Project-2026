import { LoginForm } from "@/components/shared/shadcn/login-form";

export default function Admin() {
  return (
    // min-h-svh -> 100% of the small viewport height
    <div className="grid lg:grid-cols-2 min-h-svh bg-[url(/LoginBackgroundImage.jpg)] bg-cover bg-center">
      {/* Grid item 1 */}
      <div className="flex flex-col gap-4 p-6 md:p-10 ">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm text-slate-950/90 backdrop-blur-sm bg-white/30 border border-slate-950/20 rounded-3xl px-8 py-18">
            <LoginForm />
          </div>
        </div>
      </div>
      {/* Grid item 2 */}
      <div />
    </div>
  );
}
