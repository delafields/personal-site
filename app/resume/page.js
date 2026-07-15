import ProjectWrapper from "../../components/ProjectWrapper"

export const metadata = {
  title: "Jeremy's resume",
}

export default function Resume() {
  return (
    <ProjectWrapper pageTitle="resume" hideStripes>
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl px-4">
        <a
          href="/Jeremy_Fields_Resume.pdf"
          download
          className="font-bold text-myred hover:opacity-60 uppercase"
        >
          ↓ download pdf
        </a>
        <object
          data="/Jeremy_Fields_Resume.pdf"
          type="application/pdf"
          className="w-full h-[80vh] shadow-lg"
        >
          <p className="text-center">
            Your browser can&apos;t display PDFs.{" "}
            <a href="/Jeremy_Fields_Resume.pdf" className="font-bold text-myred underline">
              Download the resume instead.
            </a>
          </p>
        </object>
      </div>
    </ProjectWrapper>
  )
}
