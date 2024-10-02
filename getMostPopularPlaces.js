export function getMostPopularPlaces(places){
    let array = places.sort()
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (index == element[index]) {
            return array[index];
        }
    }
}
console.log(getMostPopularPlaces(["Analamahitsy", "Analamahitsy" , "Itaosy", "Behoririka", "Itaosy", "Itaosy"] ));
