import { useNavigate } from 'react-router-dom';
import BannerImage from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header/'
import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login');
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implement
                        <br />
                    </TitleHighlight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e ancare seu 
                        novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
            </div>
            <div>
                <img src={BannerImage} alt="Imagem principal" />
            </div>
        </Container>
    </>)
}

export { Home }