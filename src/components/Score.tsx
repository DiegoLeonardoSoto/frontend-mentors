const Score = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center p-4  w-40 h-40 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[var(--clr-primary-500)]">
        <div className="flex flex-col">
          <span className="text-6xl sm:text-5xl font-bold "> 76 </span>
          <span className="text-sm opacity-50"> of 100 </span>
        </div>
      </div>
    </div>
  )
}

export default Score
