#!/bin/python
import sys, os

def FrontMatter(contents):
    mainStart = 0
    frontMatter = {}
    for (number, line) in enumerate(contents):
        mainStart = number
        if line.startswith("#let date ="):
            frontMatter["date"] = line[line.find("\"")+1:-1]
            continue
        if line.startswith("#let file ="):
            frontMatter["file"] = line[line.find("\"")+1:-1].split("/")[-1]
            continue
        if line.startswith("#let title ="):
            frontMatter["title"] = line[line.find("\"")+1:-1]
            continue
        if line.startswith("#let authors ="):
            frontMatter["authors"] = [s.strip()[1:] for s in line[line.find("(")+1:line.find(")")].split("\",") if len(s) > 0]
            continue
        if line.startswith("#let affiliations ="):
            frontMatter["author-affiliation"] = [s.strip()[1:] for s in line[line.find("(")+1:line.find(")")].split("\",") if len(s) > 0]
            continue
        if line.startswith("#let group1 ="):
            frontMatter["group1"] = [s.strip()[1:] for s in line[line.find("(")+1:line.find(")")].split("\",") if len(s) > 0]
            continue
        if line.startswith("#let group2 ="):
            frontMatter["group2"] = line[line.find("\"")+1:-1]
            continue
        if line.startswith("#let abstract ="):
            frontMatter["excerpt"] = line[line.find("\"")+1:-1]
            continue
        if line.startswith("#let coverImage ="):
            frontMatter["coverImage"] = line[line.find("\"")+1:-1]
            continue
        if line.startswith("#let authorInfo ="):
            frontMatter["author-bio"] = line[line.find("\"")+1:-1]
            continue
        if line.startswith("#let refsFile ="):
            frontMatter["refs-file"] = line[line.find("\"")+1:-1]
            continue
        if line.startswith("#let category ="):
            frontMatter["field"] = line[line.find("\"")+1:-1]
            continue
        if line.startswith("#let authorImage ="):
            frontMatter["authorImage"] = line[line.find("\"")+1:-1]
            continue
        if line.startswith("// begin"):
            break
    return frontMatter, mainStart


def MainMatterArticle(mainContents, mainStart):
    mainMatter = ""
    figCounter = 1
    for line in mainContents:
        if line.startswith("#v-image(") or line.startswith("#h-image("):
            imageDict = {}
            for (i, s) in enumerate([s.strip() for s in line[line.find("(")+1:line.rfind(")")].split("\",")]):
                k, v = [s[:s.find(":")].strip(' \"'), s[s.find(":")+1:].strip(' \"')]
                imageDict[k] = v
            mainMatter += "{{% include article-image.html image=\"{}\" caption=\"**Fig {}**. {}\" width=500 %}}\n".format(imageDict['path'], figCounter, imageDict['caption'])
            figCounter += 1
            continue
        if line.startswith("#align") or line.startswith("#colbreak()") or line.startswith("#show: section.with") or line.startswith("#import"):
            continue
        if line.startswith("#dcap(\"") and line.endswith("\")"):
            mainMatter += line[7:-2]+"\n"
        elif line.startswith("=="):
            mainMatter += line.replace("==", "##")
        else:
            mainMatter += line+"\n"
    return mainMatter


def MainMatterInterview(interviewName, interviewer, interviewee):
    interviewPath = os.path.join(os.path.dirname(typstpath), interviewName)
    interviewContent = [line.strip() for line in open(interviewPath, "r")]
    mainMatter = ""
    decorationFlag = False
    for line in interviewContent:
        if len(line) == 0:
            continue
        if line.startswith("V-IMAGE:") or line.startswith("H-IMAGE:"):
            imageDict = {}
            for (i, s) in enumerate([s.strip() for s in line[line.find("(")+1:line.rfind(")")].split("\",")]):
                k, v = [s[:s.find(":")].strip(' \"'), s[s.find(":")+1:].strip(' \"')]
                imageDict[k] = v
            mainMatter += "{{% include article-image.html image=\"{}\" caption=\"{}\" width=500 %}}\n".format(imageDict['path'], imageDict['caption'])
            continue
        if line.startswith("#dcap(\"") and line.endswith("\")"):
            mainMatter += line[7:-2]+"\n"
        elif line.startswith("#"):
            continue
        else:
            if line.startswith(interviewee):
                decorationFlag = True
            if True in [line.startswith(s) for s in interviewer]:
                decorationFlag = False
            mainMatter += line+"\n"
            if decorationFlag:
                mainMatter += "{: .interview-answer }\n"
    return mainMatter

typstpath = sys.argv[1]
category = sys.argv[2]
with open(typstpath, "r") as file:
    contents = [line.rstrip() for line in file]
frontMatter, mainStart = FrontMatter(contents)
frontMatter["category"] = category
print(frontMatter)
savePath = frontMatter["date"] + "-" + typstpath.split("/")[-1].replace(".typ", ".md")
if category == "article":
    mainMatter = MainMatterArticle(contents[mainStart+1:], mainStart+1)
elif category == "interview":
    mainMatter = MainMatterInterview(frontMatter["file"], frontMatter["group1"], frontMatter["group2"])

with open(savePath, "w") as file:
    file.write("---\n")
    for (k, v) in frontMatter.items():
        if k == "authors" or k == "author-affiliation":
            file.write("{}: {}\n".format(k, v))
        else:
            file.write("{}: \"{}\"\n".format(k, v))
    file.write("---\n")
    file.write(mainMatter)
