

function ErrorMsg({error}: {error: any}) {
  return (
    <span className="text-sm text-red-500">{error}</span>
  )
}

export default ErrorMsg