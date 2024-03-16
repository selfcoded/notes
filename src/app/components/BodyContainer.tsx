import { ReactNode } from "react";
import NavBar from "./NavBar";

export default function BodyContainer({
  children,
  auth,
}: {
  children: ReactNode;
  auth: ReactNode;
}) {
  return (
    <main>
      <NavBar />
      <section>here is the body</section>
      <div>{auth}</div>
      {children}
    </main>
  );
}
