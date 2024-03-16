"use client";
import { Button, Divider } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.back();
  };
  return (
    <div>
      <div className="flex w-screen h-[100dvh] fixed inset-0 z-50 overflow-x-auto justify-center [--scale-enter:100%] [--scale-exit:100%] [--slide-enter:0px] [--slide-exit:80px] sm:[--scale-enter:100%] sm:[--scale-exit:103%] sm:[--slide-enter:0px] sm:[--slide-exit:0px] items-end sm:items-center">
        <section className="flex flex-col relative z-50 w-full min-h-[50%] box-border bg-content1 outline-none mx-1 my-1 sm:mx-6 sm:my-16 max-w-md rounded-large shadow-small ">
          <div
            style={{
              border: 0,
              clipPath: "inset(50%)",
              height: 1,
              margin: -1,
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: 1,
              whiteSpace: "nowrap",
            }}
          >
            <Button style={{ width: 1, height: 1 }}></Button>
          </div>
          <Button
            className="absolute appearance-none select-none top-1 right-1 p-2 text-foreground-500 rounded-full hover:bg-default-100 active:bg-default-200 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2"
            type="button"
            onClick={() => handleClick()}
          >
            <svg
              fill="none"
              focusable="false"
              height="1em"
              role="presentation"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="1em"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </Button>
          <header className="capitalize py-4 px-6 flex-initial text-large font-semibold flex flex-col gap-1">
            {pathname.split("/")[1]}
          </header>
          <div className="flex flex-1 flex-col gap-3 px-6 py-2">
            <Divider />
            <div>{children}</div>
          </div>
          <footer className="flex flex-row gap-2 px-6 py-4 justify-end">
            {/* <Button
              className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-danger data-[hover=true]:bg-danger/20"
              type="button"
              onClick={() => handleClick()}
            >
              Close
          </Button> */}
          </footer>
        </section>
      </div>
    </div>
  );
}
