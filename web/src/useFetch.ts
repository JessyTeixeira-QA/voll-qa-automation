import { useEffect, useState } from "react";

// Definição da interface para os parâmetros, deixando o código mais limpo
interface UseFetchProps {
    url: string;
}

export default function useFetch<T>({ url }: UseFetchProps) {
    const [dados, setDados] = useState<T | null>(null);
    const [erro, setErro] = useState<string>('');

    useEffect(() => {
        // Variável de controle para evitar atualização de estado em componentes desmontados
        let montado = true;

        fetch(`http://localhost:8080/${url}`)
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
                }
                return resposta.json();
            })
            .then(dados => {
                if (montado) setDados(dados);
            })
            .catch((err: Error) => {
                if (montado) setErro(err.message);
            });

        // Função de limpeza (cleanup)
        return () => {
            montado = false;
        };
    }, [url]);

    return { dados, erro };
}