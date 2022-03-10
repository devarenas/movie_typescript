import { Movie } from './Movie';

export class HorrorMovie extends Movie {

    jumpScares: number;
    ghosts = false;
    visions = false;

    constructor(
        name: string,
        director: string,
        language: string,
        runningTime: number,
        releaseYear: number,
        jumpScares: number
    ){
        super(name, director, language, runningTime, releaseYear);
        this.jumpScares = jumpScares;

    }

    printHorrorMovie(){
        console.log(`
        =====================================
        Name:               ${this.name}
        Director:           ${this.director}
        Year:               ${this.releaseYear}
        Language:           ${this.language}
        Running Time:       ${this.runningTime}
        Jump Scares count:  ${this.jumpScares}
        Ghosts:             ${this.expectGhosts()}
        Visions:            ${this.expectVisions()}    
        =====================================        
        `)

    }

    incrementJumpScares(){
        this.jumpScares += 1;

    }


    expectGhosts(){
        if(this.ghosts){
            return "👻"
        }else{
            return "🙅‍♂️" 
        }
    }

    expectVisions(){
        if(this.visions){
            return "🔮"
        }else{
            return "🙅‍♂️" 
        } 
        
    }
}