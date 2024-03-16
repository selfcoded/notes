export default function LoginLoading() {
  return (
    <div className="flex w-screen h-[100dvh] fixed inset-0 z-50 overflow-x-auto justify-center [--scale-enter:100%] [--scale-exit:100%] [--slide-enter:0px] [--slide-exit:80px] sm:[--scale-enter:100%] sm:[--scale-exit:103%] sm:[--slide-enter:0px] sm:[--slide-exit:0px] items-end sm:items-center">
      <section className="relative z-50 w-full box-border bg-content1 outline-none mx-1 my-1 sm:mx-6 sm:my-8 sm:p-8 max-w-md rounded-large shadow-small">
        <div className="text-blue-600 text-lg">loading...</div>
      </section>
    </div>
  );
}
