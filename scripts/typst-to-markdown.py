#!/bin/python
import sys, os

def FrontMatter(contents):
    mainStart = 0
    frontMatter = {}
    for (number, line) in enumerate(contents):
        mainStart = number
        if line.startswith("#let received ="):
            day = line[line.find("day:")+4:line.find(",", line.find("day:")+4)].strip()
            month = line[line.find("month:")+6:line.find(",", line.find("month:")+6)].strip()
            if len(month) == 1:
                month = "0"+month
            if len(day) == 1:
                day = "0"+day
            year = line[line.find("year:")+5:line.find(",", line.find("year:")+5)].strip()
            frontMatter["date"] = year + "-" + month + "-" + day
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
            frontMatter["hero-image"] = os.path.basename(line[line.find("\"")+1:-1])
            continue
        if line.startswith("#let authorInfo ="):
            frontMatter["author-bio"] = line[line.find("\"")+1:-1]
            continue
        if line.startswith("#let refsFile ="):
            frontMatter["refs-file"] = os.path.splitext(os.path.basename(line[line.find("\"")+1:-1]))[0]
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
            imageDict = {'path': "", 'caption': ""}
            imageDict['path'] = os.path.basename(line[line.find("path: \"")+7:line.find("\"", line.find("path: \"")+7)])
            imageDict['caption'] = line[line.find("caption: \"")+10:line.find("\"", line.find("caption: \"")+10)]
            mainMatter += "{{% include article-image.html image=\"/assets/images/articles/{}\" caption=\"**Fig {}**. {}\" width=500 %}}\n".format(imageDict['path'], figCounter, imageDict["caption"]) + "\n"
            figCounter += 1
            continue
        if line.startswith("#align") or line.startswith("#colbreak()") or line.startswith("#show: section.with") or line.startswith("#import"):
            continue
        if line.startswith("#dcap(\"") and line.endswith("\")"):
            mainMatter += line[7:-2] + "\n"
        elif line.startswith("=="):
            mainMatter += line.replace("==", "##") + "\n"
        else:
            mainMatter += line + "\n"
    return mainMatter


def MainMatterInterview(interviewName, interviewer, interviewee):
    interviewPath = os.path.join(os.path.dirname(os.path.dirname(typstpath)), "dataFiles", interviewName)
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
            mainMatter += "{{% include article-image.html image=\"/assets/images/articles/{}\" caption=\"{}\" width=500 %}}\n".format(os.path.basename(imageDict['path']), imageDict['caption'])
            continue
        if line.startswith("#dcap(\"") and line.endswith("\")"):
            mainMatter += line[7:-2]+"\n"
        elif line.startswith("#"):
            continue
        else:
            if line.startswith(interviewee):
                decorationFlag = True
                mainMatter += "\n"
            if True in [line.startswith(s) for s in interviewer]:
                decorationFlag = False
            mainMatter += line+"\n"
            if decorationFlag:
                mainMatter += "{: .interview-answer }\n"
    return mainMatter

typstpath = sys.argv[1]
category = sys.argv[2]
issue = sys.argv[3]
with open(typstpath, "r") as file:
    contents = [line.rstrip() for line in file]
frontMatter, mainStart = FrontMatter(contents)
frontMatter["category"] = category
savePath = frontMatter["date"] + "-" + typstpath.split("/")[-1].replace(".typ", ".md")
if category == "article":
    mainMatter = MainMatterArticle(contents[mainStart+1:], mainStart+1)
elif category == "interview":
    mainMatter = MainMatterInterview(frontMatter["file"], frontMatter["group1"], frontMatter["group2"])

with open(savePath, "w") as file:
    file.write("---\n")
    file.write("issue: {}\n".format(issue))
    for (k, v) in frontMatter.items():
        if k == "authors" or k == "author-affiliation":
            file.write("{}: {}\n".format(k, v))
        else:
            file.write("{}: \"{}\"\n".format(k, v))
    file.write("---\n")
    file.write(mainMatter)
