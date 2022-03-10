"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Input_1 = require("./Input");
const ActionMovie_1 = require("./ActionMovie");
const HorrorMovie_1 = require("./HorrorMovie");
class Main {
    constructor() {
        this.firstMenu = [];
        this.actionMovies = [];
        this.horrorMovies = [];
        this.newActionMovie = [];
        this.newHorrorMovie = [];
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.showFirstMenu();
        });
    }
    fillFirstMenu() {
        this.firstMenu = [
            { option: 1, message: 'Add action movie' },
            { option: 2, message: 'Add horror movie' },
            { option: 3, message: 'Show action movies' },
            { option: 4, message: 'Show horror movies' },
            { option: 5, message: 'Increment explosions in movie' },
            { option: 6, message: 'Increment jump scares in movie' },
            { option: 7, message: 'Exit the program' },
        ];
        this.fillMovieinformation();
    }
    fillMovieinformation() {
        this.newActionMovie = [
            { name: 'name', message: 'Name' },
            { name: 'director', message: 'Director' },
            { name: 'language', message: 'Language' },
            { name: 'runningTime', message: 'Running Time (min)' },
            { name: 'releaseYear', message: 'Year' },
            { name: 'explosionCount', message: 'Explosions Count' },
        ];
        this.newHorrorMovie = [
            { name: 'name', message: 'Name' },
            { name: 'director', message: 'Director' },
            { name: 'language', message: 'Language' },
            { name: 'runningTime', message: 'Running Time (min)' },
            { name: 'releaseYear', message: 'Year' },
            { name: 'jumpScare', message: 'Jump Scares Count' },
        ];
    }
    showFirstMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            this.fillFirstMenu();
            let input = yield Input_1.Input.getSelect('Blockbuster', this.firstMenu);
            switch (input.data) {
                case 1:
                    this.showActionMovie('Fill the following', this.newActionMovie);
                    break;
                case 2:
                    this.showHorrorMovie('Fill the following', this.newHorrorMovie);
                    break;
                case 3:
                    this.actionMovies.forEach((item) => {
                        item.printActionMovie();
                    });
                    this.removeAll();
                    this.showFirstMenu();
                    break;
                case 4:
                    this.horrorMovies.forEach((item) => {
                        item.printHorrorMovie();
                    });
                    this.removeAll();
                    this.showFirstMenu();
                    break;
                case 5:
                    this.newActionMovie = [];
                    this.actionMovies.forEach((item) => {
                        this.newActionMovie.push({ name: item.id, message: item.name });
                    });
                    this.increaseExplosions("Select Action movie:", this.newActionMovie);
                    break;
                case 6:
                    this.newHorrorMovie = [];
                    this.horrorMovies.forEach((item) => {
                        this.newHorrorMovie.push({ name: item.id, message: item.name });
                    });
                    this.increaseJumpScares("Select Horror movie:", this.newHorrorMovie);
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
        });
    }
    showActionMovie(message, addMovie) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getForm(message, addMovie);
            let newMovie = new ActionMovie_1.ActionMovie(input.data.name, input.data.director, input.data.language, Number(input.data.runningTime), Number(input.data.releaseYear), Number(input.data.explosionCount));
            this.askGuns('are there guns in this movie?', newMovie);
        });
    }
    askGuns(message, movie) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getConfirm(message);
            movie.guns = input.data;
            this.askMartialArts('are there Martial Arts in this movie?', movie);
        });
    }
    askMartialArts(message, movie) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getConfirm(message);
            movie.martialArts = input.data;
            this.actionMovies.push(movie);
            this.removeAll();
            this.showFirstMenu();
        });
    }
    showHorrorMovie(message, addMovie) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getForm(message, addMovie);
            let newMovie = new HorrorMovie_1.HorrorMovie(input.data.name, input.data.director, input.data.language, Number(input.data.runningTime), Number(input.data.releaseYear), Number(input.data.jumpScare));
            this.askGhosts('are there Ghosts in this movie?', newMovie);
        });
    }
    askGhosts(message, movie) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getConfirm(message);
            movie.ghosts = input.data;
            this.askVisions('are there Visions in this movie?', movie);
        });
    }
    askVisions(message, movie) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getConfirm(message);
            movie.visions = input.data;
            this.horrorMovies.push(movie);
            this.removeAll();
            this.showFirstMenu();
        });
    }
    increaseExplosions(message, newActionMovie) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getSelectById(message, newActionMovie);
            let test = 0;
            this.actionMovies.forEach((item) => {
                if (input.data === item.id) {
                    item.incrementExplosions();
                }
            });
            this.removeAll();
            this.showFirstMenu();
        });
    }
    increaseJumpScares(message, newActionMovie) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getSelectById(message, newActionMovie);
            let test = 0;
            this.horrorMovies.forEach((item) => {
                if (input.data === item.id) {
                    item.incrementJumpScares();
                }
            });
            this.removeAll();
            this.showFirstMenu();
        });
    }
    removeAll() {
        this.firstMenu = [];
        this.newActionMovie = [];
        this.newHorrorMovie = [];
    }
}
exports.Main = Main;
