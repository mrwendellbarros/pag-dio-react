import {Link} from 'react-router-dom';
import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header'
import { Container, TextContent, Title, TitleHighLight } from './styles'

const Feed = () => {
  return (<>
    <Header/>
    <Container>
      <Card />
      <UserInfo percentual={35} nome="Wendell Gabriel" image="https://github.com/mrwendellbarros.png"/>
    </Container>
    </>
  )
}

export {Feed}