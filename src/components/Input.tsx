
interface InputProps {
  handleEnableButton: (value: string) => void;
}

export function Input({ handleEnableButton }: InputProps) {

  return (
    <input
      onChange={event => handleEnableButton(event.target.value)}
      type='email'
      name='email'
      placeholder="submit email"
      className="w-full text-lg p-4 rounded-full border-2 border-linear-400 focus-visible:border-pink-600 hover:border-pink-600"
    />
  )
}