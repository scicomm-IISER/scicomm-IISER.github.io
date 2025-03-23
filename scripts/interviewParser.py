import sys

interviewFile = sys.argv[1]
with open(interviewFile, "r") as file:
    fileContents = file.read().splitlines()
    fileContents = [line for line in fileContents if len(line) > 0]
interviewers = fileContents[0].split(",")
interviewee = fileContents[1]
imageFolder = fileContents[2]
images = fileContents[3].split(",")
imagePositions = [i * len(fileContents[4:]) // len(images) for i in range(1, len(images)+1)]

decoratedText = []
imageCounter = 0
answerFlag = False
for (i, line) in enumerate(fileContents[4:]):
    if line.startswith(interviewee):
        answerFlag = True
    for name in interviewers:
        if line.startswith(name):
            answerFlag = False
    if imagePositions[imageCounter] < i+1:
        decoratedText.append('{% include article-image.html image=\"' + imageFolder + images[imageCounter] + "\" caption=\"Shyama Narendranath is a scientist at U R Rao Satellite Centre, ISRO. She is a part of Chandrayaan-2 and other Indian planetary programs. She has been awarded the Zubin Kembhavi award by the Astronomical Society of India.\" width=300 %}\n\n" + line + "\n")
        imageCounter += 1
    else:
        decoratedText.append(line + "\n")
    if answerFlag:
        decoratedText.append("{: .interview-answer }\n")

decoratedText.append('{% include article-image.html image=\"' + imageFolder + images[-1] + "\" caption=\"Shyama Narendranath is a scientist at U R Rao Satellite Centre, ISRO. She is a part of Chandrayaan-2 and other Indian planetary programs. She has been awarded the Zubin Kembhavi award by the Astronomical Society of India.\" width=300 %}\n")

with open("decorated-" + interviewFile, "w") as file:
    file.write("\n".join(decoratedText))
