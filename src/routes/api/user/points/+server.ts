import {kv} from "@vercel/kv";
import type {GetUserPointsResponse} from "$lib/models/response/GetUserPointsResponse";
import type {GetUserPointsRequest} from "$lib/models/request/GetUserPointsRequest";

// GET /api/user/points
// pass in GetUserPointsRequest, return GetUserPointsResponse
export async function GET(req: GetUserPointsRequest): Promise<GetUserPointsResponse> {
    console.log(`GET /api/user/points/${req.sessionId}`);
    let response = await kv.hget(`user:${req.sessionId}`, "points");
    if (response === null) {
        throw new Error("User not found");
    }

    return {
        "points": Number(response)
    }
}

// POST /api/user/points
// pass in GetUserPointsRequest, return GetUserPointsResponse

