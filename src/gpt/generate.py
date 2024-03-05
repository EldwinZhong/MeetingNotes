import openai
from gpt.transcribe import transcribe
import os
def generateNotes():
    files_in_directory = os.listdir('reccordings')
    meeting_reccording = files_in_directory[0]

    transcribe(f"reccordings/{meeting_reccording}")

    with open('src/gpt/key.txt', "r") as f:
        key = f.read()
    openai.api_key = key
    with open('src/gpt/transcription.txt', "r") as f:
        transcription = f.read()

    notes = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."}, 
            {"role": "user", "content": "Generate bullet point meeting notes based on the following discussion:"},
            {"role": "assistant", "content": "This is the transcription of the meeting"},
            {"role": "user", "content": f"transcription: {transcription}"},
        ]
    )
    return notes.choices[0].message.content

