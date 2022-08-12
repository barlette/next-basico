import {useRouter} from 'next/router'

export default function Buscar() {
    const router = useRouter()
    const codigo = router.query.id
    

    return (
        <div>
            <h1>{codigo}</h1>
        </div>
    )
}