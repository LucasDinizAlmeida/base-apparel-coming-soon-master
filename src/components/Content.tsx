
import { Header } from "./Header";
import { Form } from "./Form";



export function Content() {




  return (
    <div className="flex flex-col text-center lg:text-start justify-between max-w-[600px] h-[600px] p-6">
      <div className="mr-auto max-lg:hidden">
        <Header />
      </div>
      <div className="my-auto">
        <h1 className="text-3xl lg:text-6xl font-semibold tracking-[14px] text-black">
          <span className="text-redCustom-300 font-light">WE'RE</span> <br />
          COMING <br />
          SOON
        </h1>

        <p className="text-sm text-redCustom-300 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique nostrum illum cupiditate itaque iste aliquid maiores laudantium laboriosam. Aperiam aliquam exercitationem optio debitis ipsum, sit nisi vero quas adipisci!
        </p>

        <Form />

      </div>
    </div>
  )
}