import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-light mb-8">Get in Touch</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input 
            id="name"
            type="text"
            placeholder="Your name"
            className="bg-gray-900/50 border-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input 
            id="email"
            type="email"
            placeholder="your.email@example.com"
            className="bg-gray-900/50 border-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea 
            id="message"
            placeholder="Your message"
            className="bg-gray-900/50 border-gray-800"
            rows={6}
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  )
}

