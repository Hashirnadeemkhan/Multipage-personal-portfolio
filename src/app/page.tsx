import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-light mb-8">
        Hashir Khan
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl">
        Full Stack Developer specializing in modern web applications
      </p>
      <div className="flex gap-4">
        <Button asChild variant="outline" size="lg">
          <Link href="/projects">View Projects</Link>
        </Button>
        <Button asChild size="lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}

