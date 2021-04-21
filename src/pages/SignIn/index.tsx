import React, { useCallback, useRef } from 'react';
import { HiOutlineOfficeBuilding, HiLockClosed, HiMail } from 'react-icons/hi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
// import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../hooks/auth';
// import { useToast } from '../../hooks/toast';

// import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SigInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    // const { signIn } = useAuth();
    // const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(
        async (data: SigInFormData) => {

            history.push('/dashboard');

            /*
            try {
                // Clear errors
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    email: Yup.string().required('E-mail obrigatório.').email('Informe um e-mail válido.'),
                    password: Yup.string().required('Senha obrigatória.'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await signIn({
                    email: data.email,
                    password: data.password,
                });

                history.push('/dashboard');
            } catch (error) {
                if (error instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(error);
                    formRef.current?.setErrors(errors);
                    return;
                }

                // Send a toast
                addToast({
                    type: 'error',
                    title: 'Problema no login',
                    description: 'Problema ao fazer login, verifique as informações.',
                });
            }
            */
        }, [history],
    );

    return (
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="OnHere" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu login.</h1>
                        <Input name="empresa" icon={HiOutlineOfficeBuilding} placeholder="Empresa" type="text" />
                        <Input name="email" icon={HiMail} placeholder="E-mail" type="text" />
                        <Input name="password" icon={HiLockClosed} placeholder="Senha " type="password" />
                        <Button type="submit">Entrar</Button>
                        <Link to="/forgot-password">Esqueci minha senha</Link>
                    </Form>
                    {/*
                    <Link to="/signup">
                        <FiLogIn />
                        Criar conta
                    </Link>
                    */}
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default SignIn;
