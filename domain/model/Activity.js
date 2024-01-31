export default class Activity{
    #activity;
    #type;
    #participants;
    #price;
    #link;
    #key;
    #accessibility;

    constructor(activity, type, participants, price,
                link, key, accessibility){
        this.#activity = activity;
        this.#type = type;
        this.#participants = participants;
        this.#price = price;
        this.#link = link;
        this.#key = key;
        this.#accessibility = accessibility;
    }

    get activity(){
        return this.#activity;
    }
}

// mapper object to Activity class
export function toActivity(obj){
    return new Activity(
        obj.activity,
        obj.type,
        obj.participants,
        obj.price,
        obj.link,
        obj.key,
        obj.accessibility);
}
export const emptyActivity = new Activity(
    "No activity",
    "",
    1,
    0.1,
    "",
    "",
);
