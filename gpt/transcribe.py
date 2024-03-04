import whisper

def transcribe(file):
    model = whisper.load_model("base")
    result = model.transcribe(file, fp16=False)

    with open("gpt/transcription.txt", "w") as f:
        f.write(result["text"])