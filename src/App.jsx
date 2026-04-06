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
    </div>
  )
}

export default App
