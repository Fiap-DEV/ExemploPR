import Card from './components/Card'
import image from './assets/Imagem.gif'
import styles from './css/card.module.css'
import memeclash from './assets/meme-clash.gif'

import poco from './assets/giphy.gif'

function App() {


  return (
    <div className={styles.container}>
      <Card
        titulo="Wellington Cidade"
        descricao="Programador Raiz."
        imagem={image}
        botaoTexto="Professor"
      />
      <Card
        titulo="Giovanna Dias"
        descricao="Garota de Programa"
        imagem={image}
        botaoTexto="Aluna"
      />
      <Card 
        titulo="Gabriel Ardito" 
        descricao="Rei do Clash"
        imagem={memeclash}
        botaoTexto="Codo Fofo"
        titulo="Vinicius Kozonoe" 
        descricao="Dev beta"
        imagem={poco}
        botaoTexto="Aluno"
      />
      <Card
        titulo="João Victor Melo"
        descricao="garoto de programa"
        imagem={image}
        botaoTexto="Aluno"
      />
      <Card 
        titulo="David Gama" 
        descricao="Mehno Ki Then Odiu"
        imagem={image}
        botaoTexto="Mehno"
    />
    <Card
        titulo="Alexandre Furtado" 
        descricao="Fã do Renato money moicano"
        imagem={image}
        botaoTexto="Aluno"
      />
      <Card
        titulo="Marianne Mukai" 
        descricao="Acompanhante de código"
        imagem={image}
        botaoTexto="Estudante"
 
      />
    </div>
  )
}

export default App
