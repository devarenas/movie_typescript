"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorrorMovie = void 0;
const Movie_1 = require("./Movie");
class HorrorMovie extends Movie_1.Movie {
    constructor(name, director, language, runningTime, releaseYear, jumpScares) {
        super(name, director, language, runningTime, releaseYear);
        this.ghosts = false;
        this.visions = false;
        this.jumpScares = jumpScares;
    }
    printHorrorMovie() {
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
        `);
    }
    incrementJumpScares() {
        this.jumpScares += 1;
    }
    expectGhosts() {
        if (this.ghosts) {
            return "👻";
        }
        else {
            return "🙅‍♂️";
        }
    }
    expectVisions() {
        if (this.visions) {
            return "🔮";
        }
        else {
            return "🙅‍♂️";
        }
    }
}
exports.HorrorMovie = HorrorMovie;
