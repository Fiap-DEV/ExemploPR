import Card from './components/Card'
import image from './assets/imagem.gif'
import styles from './css/card.module.css'
import image2 from './assets/image2.gif'

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
        titulo="Felipe Menezes" 
        descricao="Garoto de Programa"
        imagem={image2}
        botaoTexto="Aluno"
      />
    </div>
  )
}

export default App
