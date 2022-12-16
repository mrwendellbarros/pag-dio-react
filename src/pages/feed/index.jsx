import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header'
import { Container, Column, Title, TitleHighLight } from './styles'

const Feed = () => {
  return (<>
    <Header autenticdo={true} />
    <Container>
      <Column flex={3} >
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1} >
        <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
        <UserInfo percentual={80} nome="Wendell Gabriel" image="https://github.com/mrwendellbarros.png"/>
        <UserInfo percentual={50} nome="Wendell Gabriel" image="https://github.com/mrwendellbarros.png"/>
        <UserInfo percentual={30} nome="Wendell Gabriel" image="https://github.com/mrwendellbarros.png"/>
        <UserInfo percentual={20} nome="Wendell Gabriel" image="https://github.com/mrwendellbarros.png"/>
        <UserInfo percentual={60} nome="Wendell Gabriel" image="https://github.com/mrwendellbarros.png"/>
        <UserInfo percentual={90} nome="Wendell Gabriel" image="https://github.com/mrwendellbarros.png"/>
      </Column>
    </Container>
    </>
  )
}

export {Feed}