import axios from "./axios";
import type { userProvider } from "./user";

interface Result {
    themeID: number;
    percentage: number[];
}

export interface Vote {
    themeID: number;
    answer: number;
    userProvider: userProvider;
    userID: string;
    createdAt: number;
}

interface Transition {
    themeID: number;
    shortTransition: { timestamp: number, percentage: number[] }[];
    longTransition: { timestamp: number, percentage: number[] }[];
}

export interface Comment {
    themeID: number;
    message: string;
    userProvider: userProvider;
    userID: string;
    createdAt: number;
}

export async function getResult(themeID: number): Promise<Result> {
    return (await axios.get(`/vote/results/${themeID}`)).data;
}

export async function getVotes(themeID: number, sessionToken: string): Promise<Vote[]> {
    const data = (await axios.get(`/vote/votes/${themeID}?sessiontoken=${sessionToken}`)).data;
    return data.votes.concat(data.votesFromInfluencer);
}

export async function vote(themeID: number, sessionToken: string, answer: number): Promise<void> {
    await axios.put(`/vote/votes/${themeID}?sessiontoken=${sessionToken}&answer=${answer}`);
}

export async function getTransition(themeID: number): Promise<Transition> {
    return (await axios.get(`/vote/transitions/${themeID}`)).data;
}

export async function getComments(themeID: number): Promise<Comment[]> {
    const data = (await axios.get(`/vote/comments/${themeID}`)).data;
    return data.comments;
}

export async function comment(themeID: number, sessionToken: string, message: string): Promise<void> {
    await axios.post(`/vote/comments/${themeID}?sessiontoken=${sessionToken}&message=${message}`);
}
