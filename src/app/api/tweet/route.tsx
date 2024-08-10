import { NextRequest, NextResponse } from "next/server";
const { TwitterApi } = require("twitter-api-v2");


export async function GET(request: NextRequest) {
    await AutoPostToTwitter("Tweet Data Test for medium post.");
    return NextResponse.json({ message: "Tweet done.", statusCode: 200, }, { status: 200 });
}

//! Auto post share to Twitter function 
async function AutoPostToTwitter(tweetData: string) {
    //! Keys for twitter-api-v2
    const client = new TwitterApi({
        appKey: process.env.TWITTER_API_KEY,
        appSecret: process.env.TWITTER_API_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
        accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });

    const twitterClient = client.readWrite; //! Used to write the tweets

    await twitterClient.v2.tweet(`${tweetData}`);
}
