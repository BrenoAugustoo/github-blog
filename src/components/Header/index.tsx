import { HeaderContainer } from './styles'
import githubBlogLogoImg from '../../assets/githubBlogLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubBlogLogoImg} alt="" />
    </HeaderContainer>
  )
}
