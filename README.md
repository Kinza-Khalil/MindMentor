# MindMentor
MindMentor is a mental health chatbot designed to provide support and advice for individuals dealing with depression and anxiety. It utilizes the Rasa framework and GPT-3.5 Turbo to generate meaningful and empathetic responses based on user queries.

**Features**

Engaging conversation with the user regarding mental health topics
Provides support and advice for depression and anxiety
Dark-themed, user-friendly interface for a comfortable user experience


**Installation**

Install Python 3.7 or higher
Install Rasa: pip install rasa
Install the required Python packages: pip install -r requirements.txt
Set up the OpenAI API key: Create a .env file in the project's root directory and add your OpenAI API key: OPENAI_API_KEY=your_api_key_here Replace your_api_key_here with your actual API key from OpenAI.

**Usage**

Train the Rasa model: rasa train
Start the Rasa action server in a separate terminal: rasa run actions
Start the Rasa server: rasa shell
Open the index.html file in a web browser to interact with the chatbot. Or just press Go Live in the bottom right corner.
