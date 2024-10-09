import { makeObservable, observable, computed, action, flow } from "mobx"

class Doubler {
    value=10
    todo = null;

    constructor(value) {
        makeObservable(this, {
            value: observable,
            double: computed,
            todo: observable,
            increment: action,
            fetchTodo: flow,
        })
        // this.value = value
    }

    get double() {
        return this.value * 2
    }

    increment() {
        this.value++
    }

    *fetchTodo(url) {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            this.todo = data; // Set the fetched todo data
        } catch (error) {
            console.error("Failed to fetch todo:", error);
        }
    }
}

const doubler = new Doubler();

export default doubler;
