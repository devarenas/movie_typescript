import { Input, SelectChoice, Choice, UserFormInput } from "./Input";
import { ActionMovie } from "./ActionMovie";
import { HorrorMovie } from "./HorrorMovie";

export class Main{

    firstMenu: SelectChoice[] = [];
    actionMovies: ActionMovie[] = [];
    horrorMovies: HorrorMovie[] = [];
    newActionMovie: Choice[] = [];
    newHorrorMovie: Choice[] = [];
    


    async start(){

        this.showFirstMenu();
          
        
    }

    
    fillFirstMenu(){
        this.firstMenu = [
            { option: 1, message: 'Add action movie' },
            { option: 2, message: 'Add horror movie' },
            { option: 3, message: 'Show action movies' },
            { option: 4, message: 'Show horror movies' },
            { option: 5, message: 'Increment explosions in movie' },
            { option: 6, message: 'Increment jump scares in movie'},
            { option: 7, message: 'Exit the program'},
          ];
          this.fillMovieinformation();
          
    }

    fillMovieinformation(){

        this.newActionMovie = [
            { name: 'name', message: 'Name'},
            { name: 'director', message: 'Director'},
            { name: 'language', message: 'Language'},
            { name: 'runningTime', message: 'Running Time (min)'},
            { name: 'releaseYear', message: 'Year'},
            { name: 'explosionCount', message: 'Explosions Count'},
        ]

        this.newHorrorMovie = [
            { name: 'name', message: 'Name'},
            { name: 'director', message: 'Director'},
            { name: 'language', message: 'Language'},
            { name: 'runningTime', message: 'Running Time (min)'},
            { name: 'releaseYear', message: 'Year'},
            { name: 'jumpScare', message: 'Jump Scares Count'},
        ]
    
    }



    async showFirstMenu (){
        this.fillFirstMenu();
        let input = await Input.getSelect('Blockbuster', this.firstMenu);
        switch (input.data) {
            case 1:
                this.showActionMovie('Fill the following', this.newActionMovie)
                break;
            case 2:
                this.showHorrorMovie('Fill the following', this.newHorrorMovie)
                break;
            case 3:
                this.actionMovies.forEach((item) =>{
                    item.printActionMovie();
                })
                this.removeAll();
                this.showFirstMenu();
                break;
            case 4:
                this.horrorMovies.forEach((item) =>{
                    item.printHorrorMovie();
                })
                this.removeAll();
                this.showFirstMenu();
                break;
            case 5:
                this.newActionMovie = [];
                this.actionMovies.forEach((item) =>{
                    this.newActionMovie.push({name: item.id, message: item.name})
                })
                this.increaseExplosions("Select Action movie:", this.newActionMovie)
                break;
            case 6:
                this.newHorrorMovie = [];
                this.horrorMovies.forEach((item) =>{
                    this.newHorrorMovie.push({name: item.id, message: item.name})
                })
                this.increaseJumpScares("Select Horror movie:", this.newHorrorMovie)
                break;   
            case 7:
                console.log(`
                    ===============================================
                    ===============================================
                            You exit the program 🙋‍♂️ !!!!
                            
                    ===============================================
                    ===============================================
                `);
                break;
            default:
              console.log('no se selecciono ninguna opcion');
          }
    }

    

    async showActionMovie(message: string, addMovie: Choice[],){
        let input = await Input.getForm(message, addMovie);
        let newMovie = new ActionMovie(input.data.name, input.data.director, input.data.language, Number(input.data.runningTime), Number(input.data.releaseYear), Number(input.data.explosionCount))
        this.askGuns('are there guns in this movie?',newMovie);

    }

    async askGuns(message: string, movie: ActionMovie){
        let input = await Input.getConfirm(message);
        movie.guns = input.data;
        this.askMartialArts('are there Martial Arts in this movie?', movie);
    }

    async askMartialArts(message: string, movie: ActionMovie){
        let input = await Input.getConfirm(message);
        movie.martialArts = input.data;
        this.actionMovies.push(movie)
        this.removeAll();
        this.showFirstMenu();
        

    }


    async showHorrorMovie(message: string, addMovie: Choice[],){
        let input = await Input.getForm(message, addMovie);
        let newMovie = new HorrorMovie(input.data.name, input.data.director, input.data.language, Number(input.data.runningTime), Number(input.data.releaseYear), Number(input.data.jumpScare))
        this.askGhosts('are there Ghosts in this movie?',newMovie);

    }

    async askGhosts(message: string, movie: HorrorMovie){
        let input = await Input.getConfirm(message);
        movie.ghosts = input.data;
        this.askVisions('are there Visions in this movie?', movie);
    }

    async askVisions(message: string, movie: HorrorMovie){
        let input = await Input.getConfirm(message);
        movie.visions = input.data;
        this.horrorMovies.push(movie)
        this.removeAll();
        this.showFirstMenu();
        

    }

    async increaseExplosions(message: string, newActionMovie: Choice[]){
        let input = await Input.getSelectById(message, newActionMovie);
        let test = 0;
        this.actionMovies.forEach((item) =>{
            if(input.data === item.id){
                item.incrementExplosions();
            }
        })
        this.removeAll();
        this.showFirstMenu();

    }

    async increaseJumpScares(message: string, newActionMovie: Choice[]){
        let input = await Input.getSelectById(message, newActionMovie);
        let test = 0;
        this.horrorMovies.forEach((item) =>{
            if(input.data === item.id){
                item.incrementJumpScares();
            }
        })
        this.removeAll();
        this.showFirstMenu();

    }

    removeAll(){
        this.firstMenu = [];
        this.newActionMovie =[];
        this.newHorrorMovie = [];

    }

   

    
}