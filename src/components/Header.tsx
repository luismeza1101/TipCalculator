import "../styleSheets/Header.css";

interface Props {
  theme: string
  setTheme: (themeActal: string) => void
  isLigth: (theme: string) => boolean
}

const Header: React.FC<Props> = ({theme, setTheme, isLigth}) => {

  const changeTheme = () => {
    if(theme == 'dark'){
      setTheme('ligth')
    } else {
      setTheme('dark')
    }
  }

  
  return (
    <header className='header'>
      <h1 className="header__title">Tip Calculator</h1>
      <div className={isLigth(theme) ? 'header__toogle': 'header__toogle header__dark'}>
        <div className="header__toogleInto"
        onClick={changeTheme}></div>
      </div>
    </header>
  );
};

export default Header;
