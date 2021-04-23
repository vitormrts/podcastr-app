import { parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { GetStaticPaths, GetStaticProps } from 'next'
import { format } from 'date-fns'

import Image from 'next/image'
import Link from 'next/link'
import { api } from '../../services/api'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'

import styles from './episode.module.scss'
import { usePlayer } from '../../contexts/PlayerContext'
import Head from 'next/head'

type Episode = {
    id: string,
    title:string,
    thumbnail: string,
    members: string,
    publishedAt: string,
    duration: number,
    durationAsString: string,
    description: string
    url: string
}
  
type EpisodeProps = {
    episode: Episode
}

export default function Episode({ episode }: EpisodeProps ) {
    const { play } = usePlayer()
    // const router = useRouter()

    // if (router.isFallback) { // episodio esta carregando
    //     return <p>Carregando...</p> // usar se fallback for true
    // }

    return (
        <div className={styles.episodeContainer}>
            <Head>
                <title>{episode.title} | Podcastr</title>
            </Head>
            <div className={styles.thumbnailContainer}>
                <Link href="/">
                    <button type="button">
                        <img src="/arrow-left.svg" alt="Voltar"/>
                    </button>
                </Link>
                <Image width={700} height={160} src={episode.thumbnail} objectFit="cover"/>
                <button onClick={() => play(episode)} type="button">
                    <img src="/play.svg" alt="Tocar episódio"/>
                </button>
            </div>

            <header>
                <h1>{episode.title}</h1>
                <span>{episode.members}</span>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
            </header>

            <div className={styles.description} dangerouslySetInnerHTML={{__html: episode.description}}/>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get('episodes', {
        params: {
          _limit: 2,
          _sort: 'published_at',
          _order: 'desc'
        }
    })

    const paths = data.map(episode => {
        return {
            params: {
                slug: episode.id
            }
        }
    })

    return {
        paths, // o build nao eh gerado de forma estatico
        // retorna 404 se n tiver path e fallback for false 
        // se fallback for true e o episodio n foi gerado de forma estatica (paths vazio), eh gerado qnd o usuario entre na pagina
        // fallback no blocking faz a pagina carregar o conteudo so quando tu tiver pronto
        fallback: 'blocking', 
    }
}

export const getStaticProps: GetStaticProps = async(ctx) => { // a mesma pagina eh disponibilizada para o usuario num trecho de 24 hrs, evitando novas geracoes dela mesma cada vez q um usuario entra
    const { slug } = ctx.params // pega o nome do episodio
    const { data } = await api.get(`/episodes/${slug}`)

    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
        description: data.description,
        url: data.file.url
    }

    return {
        props: {
            episode,
        },
        revalidate: 60 * 60 * 24, // 24 hrs
    }
}