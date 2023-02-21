import { Button } from "../../components/elements/Button";
import { Img } from "../../components/elements/Img";
import { Input } from "../../components/elements/Input";
import brandLogo from "../../assets/logo-drogaria-sp.png";
import *  as S from "src/components/elements/Section"



const Login = () => {


    return (

        <form>
            <S.LoginSection>
                <Img src={brandLogo} />
                <p>Faça seu Login</p>
                <p> Acesse agora a sua conta para acompanhar os seus produtos.</p>

                <strong><em>WARNING!</em> Acesso exclusivo para colaborador</strong>
                <Input
                    required
                    placeholder="Email"
                />
                <Input
                    required
                    type="password"
                    placeholder="Senha"
                />
                <Button background="#61a2f7" type="submit">Entrar  </Button>

            </S.LoginSection>
        </form>



    )

}


export default Login;