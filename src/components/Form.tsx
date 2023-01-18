import { Input } from "./Input";
import { useState } from "react";



export function Form() {

  const [isDisabledButton, setIsDisableButton] = useState('')

  function handleEnableButton(value: string) {
    setIsDisableButton(value)
  }



  return (
    <form
      action="https://api.staticforms.xyz/submit"
      method="post"
      className="mt-8 relative"
    >
      <input type="hidden" name="accessKey" value={import.meta.env.VITE_STATIC_FORM_KEY}></input>
      <input type="hidden" name="redirectTo" value={import.meta.env.VITE_REDIRECT_URL}></input>
      <Input handleEnableButton={handleEnableButton} />

      {
        isDisabledButton ?
          <button type="submit" className="absolute w-24 flex items-center justify-center px-4 rounded-full bg-linear-400 top-0 bottom-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671" /></svg>
          </button>
          :
          <button
            type="submit"
            className="absolute w-24 flex items-center justify-center px-4 rounded-full bg-linear-400 top-0 bottom-0 right-0 disabled:opacity-70"
            disabled={isDisabledButton === ''}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671" /></svg>
          </button>
      }
    </form>
  )
}