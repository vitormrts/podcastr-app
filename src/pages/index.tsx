// Formas de conseguir uma API

import { useEffect } from "react"

// SPA => useEffect() -> nao carrega se desabilitar o JS
// SSR => getServerSideProps() -> carrega a API antes de abrir a pagina
// SSG => gera uma versao estatica, isto eh, a mesma pagina eh disponibilizada num determinado tempo (nao precisa fazer novas requisicoes, deixa a pagina mais performatica)

export default function Home(props) {
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //     .then(response => response.json())
  //       .then(data => console.log(data))
  // }, [])
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() { // a mesma pagina eh disponibilizada para o usuario num trecho de tempo (sem atts constantes)
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json()

    return {
      props: {
        episodes: data
      },

      revalidate: 60 * 60 * 8 // a cada 8hrs eh gerada uma nova pagina
    }
}

// export async function getServerSideProps() { // carrega a API antes mesmo de abrir a pagina (executa toda vez que alguem acessa a home do app)
//     const response = await fetch('http://localhost:3333/episodes')
//     const data = await response.json()

//     return {
//       props: {
//         episodes: data
//       }
//     }
// }
