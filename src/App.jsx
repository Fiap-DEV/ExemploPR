import Card from './components/Card'
import image from './assets/imagem.gif'
import styles from './css/card.module.css'
import memeclash from './assets/meme-clash.gif'


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
      />
    </div>
  )
}

export default App
