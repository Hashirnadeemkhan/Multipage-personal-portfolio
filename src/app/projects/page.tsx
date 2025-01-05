import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"


export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-light mb-12">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-light">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <div className="flex gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-800 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management",
    technologies: ["Next.js", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    technologies: ["React", "Firebase", "Tailwind"]
  },
  {
    title: "Hashirblog",
    description: "A Markdown blog related to learn coding",
    technologies: ["Nextjs", "Pieces", "Tailwind","Remark","Rehype"]
  },
  {
    title: "iPOS",
    description: "A Admin Panel of Resturant",
    technologies: ["React", "Pieces", "Tailwind","Shadcn","Laravel"]
  },
  // Add more projects as needed
]

