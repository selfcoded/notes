import { Input, Link } from "@nextui-org/react";

export default function Login() {
  return (
    <div>
      <form action="#">
        <div className="h-20 mb-2 sm:col-span-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              className="pl-3 block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="email"
              type="text"
            />
          </div>
        </div>
        <div className="h-20 mb-2 sm:col-span-3">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            password
          </label>
          <div className="mt-2">
            <input
              className="pl-3 block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="password"
              type="password"
            />
          </div>
          <div className="mt-2">
            <p className="text-xs text-slate-400">
              forgot your password?{" "}
              <Link className="text-danger-400 underline" href={"/reset"}>
                reset here
              </Link>
            </p>
          </div>
          <div className="text-center">
            <button className="text-center mt-5 capitalize z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
