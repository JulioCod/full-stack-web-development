import type { RequestHandler } from "@sveltejs/kit";
import {api} from "./_api"

export const get: RequestHandler = (request) => {
    return api(request)
}

export const post: RequestHandler<{}, FormData> = (request) => {
    return api(request, {
        create_at: new Date(),
        done: false,
        text: request.body.get('text')})
}