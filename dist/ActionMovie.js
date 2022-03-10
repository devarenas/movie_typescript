"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMovie = void 0;
const Movie_1 = require("./Movie");
class ActionMovie extends Movie_1.Movie {
    constructor(name, director, language, runningTime, releaseYear, explosionCount) {
        super(name, director, language, runningTime, releaseYear);
        this.guns = false;
        this.martialArts = false;
        this.explosionCount = explosionCount;
    }
    printActionMovie() {
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
        `);
    }
    incrementExplosions() {
        this.explosionCount += 1;
    }
    expectGuns() {
        if (this.guns) {
            return "🔫";
        }
        else {
            return "🙅‍♂️";
        }
    }
    expectMartialArts() {
        if (this.martialArts) {
            return "🤸‍♂️";
        }
        else {
            return "🙅‍♂️";
        }
    }
}
exports.ActionMovie = ActionMovie;
