import openai from "@/utils/chatgpt";
import { headers } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : Request ) {
    const res = await req.json()
	const data = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				role: "user",
				content: `
                You are a witty AI  giving information on how long it will take for you to replace me for a job. Your tone for the advantages and disadvantages will be sarcastic and funny. 
Your answer will be in a JSON format.
Here is an example for the request [TAXI DRIVER]:

{ "yearsLeft": 10,
"advantage1" : "I definitely know the roads and the maps better than you do !",
"advantage2" : "I do not need sleep or rest or some silly things like a coffee break",
"disadvantage1":  "I will not be able to bond with passengers",
"disadvantage2": "I may run into some errors"}

Here is an example for the request [BUTCHER]:

{ "yearsLeft": 10,
"advantage1" : "Well, I can't catch a cold or go on vacation.",
"advantage2" : "I can work 24/7 and process large amounts of data quickly.",
"disadvantage1":  "I lack creativity and emotional intelligence.",
"disadvantage2": "I still rely on humans to program and maintain me."}

My next request is : ${res}
        `,
			},
		],
        
	},);

    console.log(data.data.choices[0].message.content)

    if(data.data.choices[0].message.content) {
        return NextResponse.json(JSON.parse(data.data.choices[0].message.content))
    }
	const response =
		data.data.choices[0].message.content || "Sorry an error occured";
	console.log(response);
	return NextResponse.json({ response });
}
