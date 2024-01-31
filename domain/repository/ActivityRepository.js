import {getRandomActivity, getRandomByCategory} from "../../data/remote/api_fetch";
//import {getRandomActivity} from "../../data/remote/api_axios";
import {getCategories} from "../../data/remote/api_fake";

export default class ActivityRepository{
    getRandomActivity(){
        return getRandomActivity();
    }
    getRandomFromCategory(category){
        return getRandomByCategory(category);
    }
    getCategories() {
        return getCategories();
    }
}
