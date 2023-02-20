import { Button } from "../../components/elements/Button";
import { Img } from "../../components/elements/Img";
import { Input } from "../../components/elements/Input";
import brandLogo from "../../assets/logo-drogaria-sp.png";
import Section from "src/components/elements/Section";



const Login = () => {


    return (
        <div>
            <Section>
                <Img src={brandLogo} />
                <Input
                    required
                    placeholder="Email"
                />
                <Input
                    required
                    type="password"
                    placeholder="Senha"
                />
                <Button>Entrar  </Button>
            </Section>



        </div>
    )

}


export default Login;