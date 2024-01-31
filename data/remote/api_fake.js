import Activity from "../../domain/model/Activity";

export async function getRandomActivity(){
    return new Activity(
        "Learn to code",
        "education",
        1,
        0.1,
        "https://www.freecodecamp.org/",
        "1234567",
        0.1
    );
}
export async function getCategories(){
    return ["education", "recreational", "social",
        "diy", "charity", "cooking",
        "relaxation", "music", "busywork"]
}
