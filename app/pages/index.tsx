import Header from "@/components/Header";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center px-2">
      <div className="w-full max-w-5xl px-2 flex flex-col gap-16">
        <Header />
        <Navigation />
      </div>
    </div>
  )
}
