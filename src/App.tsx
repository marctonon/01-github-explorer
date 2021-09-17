import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
    //throw new Error('Birulirow, o que pegou?')
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}