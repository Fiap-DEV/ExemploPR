import Card from './components/Card'
import image from './assets/imagem.gif'
import styles from './css/card.module.css'
import capivara from './assets/capivara.gif'


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
        titulo="João Gonzales" 
        descricao="Mairiporanense"
        imagem={capivara}
        botaoTexto="Aluno 00"
      />
    </div>
  )
}

export default App
