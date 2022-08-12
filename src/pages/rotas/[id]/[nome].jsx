import {useRouter} from 'next/router'

export default function CodigoENome() {
    const router = useRouter()
    const codigo = router.query.id
    const nome = router.query.nome
    

    return (
        <div>
            <h1>{codigo} {nome}</h1>
        </div>
    )
}