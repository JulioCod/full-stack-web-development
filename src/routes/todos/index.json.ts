import type { RequestHandler } from "@sveltejs/kit";

//TODO: Presist in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler<{}, FormData> = (request) => {
    todos.push({
        create_at: new Date(),
        done: false,
        text: request.body.get('text')});
    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}