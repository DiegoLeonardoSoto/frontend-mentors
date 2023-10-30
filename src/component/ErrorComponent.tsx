type Props = {
  monthErrorMessage: string | undefined
  yearErrorMessage: string | undefined
}

const ErrorComponent = ({ monthErrorMessage, yearErrorMessage }: Props) => {
  return (
    <>
      {monthErrorMessage && !yearErrorMessage && (
        <p className="mt-3 sm:text-sm text-xs  text-red">
          {monthErrorMessage?.toString()}
        </p>
      )}
      {yearErrorMessage && !monthErrorMessage && (
        <p className="mt-3 sm:text-sm text-xs  text-red">
          {yearErrorMessage?.toString()}
        </p>
      )}

      {yearErrorMessage && monthErrorMessage && (
        <p className="mt-3 sm:text-sm text-xs  text-red">
          {yearErrorMessage === monthErrorMessage
            ? yearErrorMessage?.toString()
            : monthErrorMessage.toString().charAt(0).toUpperCase() +
              monthErrorMessage.toString().toLowerCase().slice(1) +
              ' and ' +
              yearErrorMessage?.toString().toLowerCase()}
        </p>
      )}
    </>
  )
}

export default ErrorComponent
