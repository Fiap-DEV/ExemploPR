import Card from './components/Card'
import image from './assets/imagem.gif'
import styles from './css/card.module.css'
import imagePeixe from './assets/imagemDoPeixe.gif'


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
        titulo="João Sarracine" 
        descricao="O do lado ama o Cidade"
        imagem={imagePeixe}
        botaoTexto="Aluno nutella"
      />
    </div>
  )
}

export default App
