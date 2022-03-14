import '../../styles/components/header.css'

interface Props {
  quote?: string
}

export const Header = ({ quote }: Props) => {
  return (
    <header className="header">
      <p className="header__title">STAR WARS</p>
      {quote && <q className="header__quote">{quote}</q>}
    </header>
  )
}
