var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import TennisGame2 from '../tennisgame2.js';

describe('TennisGame', function() {

    let game;

    beforeEach(function() {
        game = new TennisGame2("Judador 1", "Jugador 2");
    });

    it('deberia devolver Love-All si nadie anoto', function() {
        expect(game.getScore()).equal("Love-All");
    });

    it('deberia devolver Fifteen-Love si jugador 1 anoto', function() {
        game.P1Score();
        expect(game.getScore()).equal("Fifteen-Love");
    });

});
