import fs from "fs"  // The File System module, it is being used to read .md (Markdown) files.
import matter from "gray-matter" //The gray-matter library is used to parse the frontmatter (metadata) of Markdown files.
import { notFound } from "next/navigation"  //This is a utility from Next.js used to render a "Not Found" page when the requested content is not found.
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers' 
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

export default async function Page({ params }: { params: { slug: string } }) {  // a prop called params in the form { params: { slug: string } }. In Next.js, the dynamic parameter slug is passed automatically for routes like /blogpost/[slug].
  const filepath =  `src/content/${params.slug}.md`  //the full path to the Markdown file based on the dynamic slug value (from the URL). 
    
  if(!fs.existsSync(filepath)){   //This checks if the file exists at the specified path
      notFound() //If it doesn't, it triggers the notFound()
      return 
  } 

  const fileContent = fs.readFileSync(filepath, "utf-8")  //This reads the content of the file synchronously (blocking) in UTF-8 encoding.
  const { content, data } = matter(fileContent)  //content: The main content of the file (the Markdown body).,//data: The metadata from the frontmatter of the file (such as title, description, author

  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify) 
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings)
  .use(rehypePrettyCode, {
    theme: "github-dark",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
  })
  const htmlContent =(await processor.process(content)).toString()
  return (
    <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
                <p className="text-sm text-gray-500 mb-4">{data.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>  
            
        </div> //prose is used with typography
  );
}
