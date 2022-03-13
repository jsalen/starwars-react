import '../../styles/components/header.css'

interface Props {
  quote?: string
}

export const Header = ({ quote }: Props) => {
  return (
    <header className="header">
      <p className="header__title">Star Wars</p>
      {quote && <q className="header__quote">{quote}</q>}
    </header>
  )
}
