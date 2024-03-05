from flask_restful import Resource, request, reqparse
from gpt.generate import generateNotes

class Notes(Resource):
    def get(self):
        generatedNote = generateNotes()
        splitted = generatedNote.split('\n')
        generated = {'original note': generatedNote}
        for i in range(len(splitted)):
            generated[i] = splitted[i]
        return generated