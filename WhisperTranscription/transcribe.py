import whisper

model = whisper.load_model("base")
result = model.transcribe("reccordings/harvard.wav", fp16=False)

with open("whisper/transcription.txt", "w") as f:
    f.write(result["text"])