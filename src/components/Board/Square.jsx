
// eslint-disable-next-line react/prop-types
const Square = ({value, onSquareClick}) => {
    
  return (
    <>
        <button 
            className='bg-white border border-gray-600 h-12 w-12 m-1 leading-9 text-lg'
            onClick={onSquareClick}
            >
            {value}
        </button>
    </>
  )
}

export default Square