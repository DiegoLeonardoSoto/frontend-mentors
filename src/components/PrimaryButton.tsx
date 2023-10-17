type Props = {
  text: string
}

const PrimaryButton = ({ text }: Props) => {
  return (
    <button
      type="submit"
      className="bg-darkSlateGrey rounded-lg font-bold p-4 text-white hover:bg-gradient-to-r from-rose-500 to-tomato hover:drop-shadow-[2px_2px_14px_hsl(4,100%,67%)] "
    >
      {text}
    </button>
  )
}

export default PrimaryButton
