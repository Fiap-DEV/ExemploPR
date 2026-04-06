import Card from './components/Card'
import image from './assets/imagem.gif'
import styles from './css/card.module.css'


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
        titulo="Marianne Mukai" 
        descricao="Acompanhante de código"
        imagem={image}
        botaoTexto="Estudante"
      />
    </div>
  )
}

export default App
