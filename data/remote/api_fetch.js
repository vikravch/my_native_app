import {toActivity} from "../../domain/model/Activity";

const base_url = "https://www.boredapi.com/api/";
export async function getRandomActivity(){
    const response = await fetch(base_url+'activity');
    if (response.ok){
        const obj = await response.json();
        const activityRes = toActivity(obj);
        console.log(activityRes);
        return activityRes;
    } else {
        throw "Wrong answer from server :(";
    }
}
export async function getRandomByCategory(category){
    const response = await fetch(
        base_url+'activity?type='+category);
    if(response.ok){
        const obj = await response.json();
        const activityRes = toActivity(obj);
        console.log(activityRes);
        return activityRes;
    } else {
        throw "Wrong answer from server :(";
    }
}
