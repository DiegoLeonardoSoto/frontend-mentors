import ResultComponent from './Result'
import SummaryComponent from './Summary'

const ResultSummaryComponent = () => {
  return (
    <div className="w-full sm:flex bg-[var(--clr-neutral-100)] sm:w-4/5 sm:mx-auto sm:rounded-2xl rounded-r-none sm:drop-shadow-xl ">
      <ResultComponent />
      <SummaryComponent />
    </div>
  )
}

export default ResultSummaryComponent
