import { expect } from "chai";
import { describe, it } from "mocha";
import { getMostPopularPlaces } from "../getMostPopularPlaces.js";

describe("Most popular residence", function(){
    it("Should return Analamahintsy and Itasoy", function() {
        expect(getMostPopularPlaces(["Analamahitsy", "Analamahitsy" , "Itaosy", "Behoririka", "Itaosy", "Itaosy"])).to.eq("Itaosy Analamahitsy");
    })
})
