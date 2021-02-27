import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

type Repo = {
    name: string;
    description: string;
}

type RepositorieProps = {
    repos: Repo[];
}

export default function Repositories({ repos }: RepositorieProps) {
    return (
        <div>
            <h1>Repositories</h1>
            <ul>
                {repos.map(repo => (
                    <li key={repo.name}>{repo.name} - {repo.description}</li>
                ))}
            </ul>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
    const data = await response.json();

    return {
        props: {
            repos: data
        }
    }
}
