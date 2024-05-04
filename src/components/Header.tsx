import '../styleSheets/Header.css'

const Header: React.FC = () => {
  return (
    <header className='header'>
        <h1 className='header__title'>Tip Calculator</h1>
        <div className='header__toogle'><div className='header__toogleInto'></div></div>
    </header>
  )
}

export default Header
