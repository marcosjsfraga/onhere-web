import React from 'react'
import OnHeader from '../../components/OnHeader'
import { Container, Content } from './styles'

export const User = () => {

    return (
        <Container>
            <OnHeader />

            <Content>
                {/*
                <table>
                    <thead>
                        <tr>
                            <th align='left'>Login</th>
                            <th align='left'>Nome</th>
                            <th align='left'>Tipo</th>
                            <th align='left'>Ativo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount) }
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR')
                                            .format(new Date(transaction.createdAt))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                */}
            </Content>

        </Container>
    )
}
