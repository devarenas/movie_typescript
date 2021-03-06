import { Movie } from './Movie';

export class ActionMovie extends Movie {

    explosionCount: number;
    guns = false;
    martialArts = false;

    constructor(
        name: string,
        director: string,
        language: string,
        runningTime: number,
        releaseYear: number,
        explosionCount: number
    ){
        super(name, director, language, runningTime, releaseYear);
        this.explosionCount = explosionCount;

    }

    printActionMovie(){
        console.log(`
        =====================================
        Name:            ${this.name}
        Director:        ${this.director}
        Year:            ${this.releaseYear}
        Language:        ${this.language}
        Running Time:    ${this.runningTime}
        Explosion count: ${this.explosionCount}
        Guns:            ${this.expectGuns()}
        Martial Arts:    ${this.expectMartialArts()}    
        =====================================        
        `)

    }

    incrementExplosions(){
        this.explosionCount += 1;
    }


    expectGuns(){
        if(this.guns){
            return "π«"
        }else{
            return "πββοΈ" 
        }


    }

    expectMartialArts(){
        if(this.martialArts){
            return "π€ΈββοΈ"
        }else{
            return "πββοΈ" 
        }
    }
}