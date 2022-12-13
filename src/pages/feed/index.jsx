import {Link} from 'react-router-dom';
import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UseInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header'
import { Container, TextContent, Title, TitleHighLight } from './styles'

const Feed = () => {
  return (<>
    <Header/>
    <Container>
      <Card />
      <UseInfo />
    </Container>
    </>
  )
}

export {Feed}