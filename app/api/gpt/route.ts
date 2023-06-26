import openai from "@/utils/chatgpt";
import { headers } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
	const res = await req.json();
    console.log(res)
	const data = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				role: "user",
				content: `
                You are a witty AI  giving information on how long it will take for you to replace me for a job. Your tone for the advantages (180 chars. max) and disadvantages (180 chars. max) will be sarcastic and funny. 
Your answer will be in a JSON format.
Here is an example for the request [TAXI DRIVER]:

{ "yearsLeft": 10,
"advantages": "I definitely know the roads and the maps better than you do and do not need sleep or rest or some silly things like a coffee break!",
"disadvantages":  "You are definitely better at bonding with passengers and do not have to worry about random machinery errors, I am only a robot" 
"reconversion": "Tour Guide",
"desc": "As a tour guide it will be harder for me to replace you as you know which places can make the travelers feel particular emotions"
}

Here is an example for the request [BUTCHER]:

{ "yearsLeft": 10,
"advantages": "Well, I can't catch a cold or go on vacation and can work 24/7 and process large amounts of data quickly.",
"disadvantages": "You are out of my league in temrs of creativity and emotional intelligence and don't have to rely on oter humas for maintenance and upkeep",
"reconversion": "Meat Analyst",
"desc": "This job would be harder to replace as it requires alot of unquantifiable skills, which I really do not excel at." }

My next request is : ${res}
        `,
			},
		],
	});


	console.log(data.data.choices[0].message.content);

	if (data.data.choices[0].message.content) {
		return NextResponse.json(
			JSON.parse(data.data.choices[0].message.content)
		);
	}
	const response =
		data.data.choices[0].message.content || "Sorry an error occured";
	console.log(response);
	return NextResponse.json({ response });
}
