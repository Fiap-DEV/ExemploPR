import Card from './components/Card'
import image from './assets/Imagem.gif'
import styles from './css/card.module.css'
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
        titulo="Vinicius Kozonoe" 
        descricao="Dev beta"
        imagem={poco}
        botaoTexto="Aluno"
      />
    </div>
  )
}

export default App
