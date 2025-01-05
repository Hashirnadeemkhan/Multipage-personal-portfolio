export default function About() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-light mb-8">About Me</h1>
        <div className="space-y-6 text-gray-300">
          <p>
            Hi, {`I'm`} Hashir Khan, a passionate Full Stack Developer with expertise in modern web technologies.
            I specialize in building responsive and performant web applications using React, Next.js, and Node.js.
          </p>
          <h2 className="text-2xl font-light mt-12 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="p-4 bg-gray-900/50 rounded-lg">
                <h3 className="font-medium mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  const skills = [
    {
      name: "Frontend Development",
      description: "React, Next.js, Tailwind CSS, TypeScript"
    },
    {
      name: "Backend Development",
      description: "Node.js, Fastapi, Python, PostgreSQL"
    },
    {
      name: "Agentic Ai",
      description: "Langchain, langGraph, Python, Generative Ai"
    },
   
    // Add more skills as needed
  ]
  
  