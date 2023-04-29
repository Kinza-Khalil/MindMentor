import os
from typing import Any, Text, Dict, List
import openai
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

class ActionGPT3Response(Action):
    def name(self) -> Text:
        return "action_gpt3_response"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        # Get the user's message
        user_message = tracker.latest_message['text']

        # Set up the OpenAI API key
        openai.api_key = os.environ["OPENAI_API_KEY"]

        # Send the user's message to GPT-3.5 Turbo and get a response
        response = openai.Completion.create(
            engine="text-davinci-002",
            prompt=f"User: {user_message}\nAssistant:",
            max_tokens=50,
            n=1,
            stop=None,
            temperature=0.7,
        )

        # Extract the generated text from the GPT-3.5 Turbo response
        gpt3_response = response.choices[0].text.strip()

        # Send the GPT-3.5 Turbo response as a chatbot response
        dispatcher.utter_message(text=gpt3_response)

        return []
