import express from 'express';
const app = express();
const port = 4002;

const filmes = [{nome: "Moonlight: Sob a Luz do Luar", duração: "1h 51m", genêro: "Thriller/Romance", lançamento: 2016, classificaçãoIndicativa: 16, filme: "verdadeiro", serie: "falso" },
    { nome: "Call Me By Your Name", duração: "2h 12m", genêro: "Drama/Romance", lançamento: 2017, classificaçãoIndicativa: 18, filme: "verdadeiro", serie: "falso" },
    { nome: "Paris is Burning", duração: "1h 11m", genêro: "Documentary", lançamento: 1990, classificaçãoIndicativa: 16, filme: "verdadeiro", serie: "falso" },
    { nome: "Carol", duração: "1h 58m", genêro: "Drama/Romance", lançamento: 2015, classificaçãoIndicativa: 18, filme: "verdadeiro", serie: "falso" },
    { nome: "The Half of It", duração: "1h 45m", genêro: "Drama/Romance", lançamento: 2020, classificaçãoIndicativa: 16, filme: "verdadeiro", serie: "falso" },
    { nome: "Love, Simon", duração: "1h 50m", genêro: "Comedy/Drama/Romance", lançamento: 2018, classificaçãoIndicativa: 12, filme: "verdadeiro", serie: "falso" },
    { nome: "A Morte e a Vida de Marsha P. Johnson", duração: "1h 45m", genêro: " Documentário/Melodrama", lançamento: 2017, classificaçãoIndicativa: 14, filme: "verdadeiro", serie: "falso" },
    { nome: "Tangerine", duração: "1h 28m", genêro: "Comedy/Drama", lançamento: 2015, classificaçãoIndicativa: 18, filme: "verdadeiro", serie: "falso" },
    { nome: "Portrait of a Lady on Fire", duração: "2h", genêro: "Drama/Romance", lançamento: 2019, classificaçãoIndicativa: 16, filme: "verdadeiro", serie: "falso" },
    { nome: "Orange is the New Black", duração: "7 Temporadas", genêro: "Crime/Drama", lançamento: 2013, classificaçãoIndicativa: 18, filme: "falso", serie: "verdadeiro" },
    { nome: "The Danish Girl", duração: "2h", genêro: "Biography/Drama/Romance", lançamento: 2015, classificaçãoIndicativa: 14, filme: "verdadeiro", serie: "falso" },
    { nome: "Hedwig and the Angry Inch", duração: "1h 35m", genêro: "Comedy/Drama/Music", lançamento: 2001, classificaçãoIndicativa: 18, filme: "verdadeiro", serie: "falso" },
    { nome: "Pose", duração: "3 Temporadas", genêro: "Drama", lançamento: 2018, classificaçãoIndicativa: 16, filme: "falso", serie: "verdadeiro" },
    { nome: "A Fantastic Woman", duração: "1h 44m", genêro: "Drama", lançamento: 2017, classificaçãoIndicativa: 15, filme: "verdadeiro", serie: "falso" },
    { nome: "The Adventures of Priscilla, Queen of the Desert", duração: "1h 44m", genêro: "Comedy/Drama/Music", lançamento: 1994, classificaçãoIndicativa: 16, filme: "verdadeiro", serie: "falso" },
    { nome: "Queer Eye", duração: "6 Temporadas", genêro: "Reality-TV", lançamento: 2018, classificaçãoIndicativa: 12, filme: "falso", serie: "verdadeiro" },
    { nome: "Maurice", duração: "2h 20m", genêro: "Drama/Romance", lançamento: 1987, classificaçãoIndicativa: 14, filme: "verdadeiro", serie: "verdadeiro" },
    { nome: "Weekend", duração: "1h 37m", genêro: "Drama/Romance", lançamento: 2011, classificaçãoIndicativa: 18, filme: "verdadeiro", serie: "falso" },
    { nome: "Will & Grace", duração: "8 Temporadas", genêro: "Comedy/Romance", lançamento: 1998, classificaçãoIndicativa: 12, filme: "falso", serie: "verdadeiro" },
    { nome: "My Own Private Idaho", duração: "1h 44m", genêro: "Drama", lançamento: 1991, classificaçãoIndicativa: 18, filme: "verdadeiro", serie: "falso" },
    { nome: "Brokeback Mountain", duração: "2h 14m", genêro: "Drama/Romance", lançamento: 2005, classificaçãoIndicativa: 18, filme: "verdadeiro", serie: "falso" },
    { nome: "Boys Don't Cry", duração: "1h 58m", genêro: "Biography/Crime/Drama", lançamento: 1999, classificaçãoIndicativa: 18, filme: "verdadeiro", serie: "falso" },
    { nome: "The L Word", duração: "6 Temporadas", genêro: "Drama/Romance", lançamento: 2004, classificaçãoIndicativa: 18, filme: "falso", serie: "verdadeiro" },
    { nome: "Blue is the Warmest Color", duração: "3h", genêro: "Drama/Romance", lançamento: 2013, classificaçãoIndicativa: 18, filme: "verdadeiro", serie: "falso" },
    { nome: "Prayers for Bobby", duração: "1h 30m", genêro: "Biography/Drama/Romance", lançamento: 2009, classificaçãoIndicativa: 16, filme: "verdadeiro", serie: "falso" }
];

function filtrar (valor){
    const filtrado = filmes.filter(series => series.serie === valor)
    console.log(filtrado)
    return filtrado
}
  


  

app.use(express.json())





  app.get('/series', (req, res) => {
    const { serie } = req.body; 
    const serieFiltrada = filtrar(serie);
    res.send(serieFiltrada);
  });
  


  function filtrarFilmes (valor){
    const filtrado = filmes.filter(films => films.filme === valor)
    console.log(filtrado)
    return filtrado
}




  app.get('/films', (req, res) => {
    const { filme } = req.body; 
    const filmeFiltrado = filtrarFilmes(filme);
    res.send(filmeFiltrado);
  });



function seriesFilmes (){
    return filmes
}


  app.get('/films-series', (req, res) => {
    const filmesSeries = seriesFilmes ();
    res.json ({filmesSeries});
  });



app.listen(port, () => {
    console.log(`Servidor ouvindo em http://localhost:${port}`);
});