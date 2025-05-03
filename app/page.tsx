
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col items-center gap-2">
        
        <p className={subtitle()}>Track your payments with ease</p>
      </div>

    </section>
  );
}
