import json
import random
from tqdm import tqdm


def loadData(dataFile):
    words_data = json.load(open(dataFile, "r"))
    words_data["hints"] = {k.strip(): v.strip() for k,v in words_data["hints"].items()}
    return words_data["size"], words_data["intersections"], words_data["hints"]


def isAcceptable(word, sequence, direction, crossword, cell_direction, size, connections):
    if sequence[-1][0] >= size or sequence[-1][1] >= size or sequence[0][0] < 0 or sequence[0][1] < 0:
        return False
    for shift in [0, -1]:
        adjacent = list(sequence[shift])
        adjacent[direction] -= int(2 * (shift + 0.5))
        if adjacent[direction] >= 0 and adjacent[direction] < size and crossword[tuple(adjacent)] != "#":
            return False
    for (loc, char) in zip(sequence, word):
        for shift in [1, -1]:
            adjacent = list(loc)
            adjacent[1 - direction] += shift
            # if word == "SPECTROSCOPE" and adjacent[1 - direction] >= 0 and adjacent[1 - direction] < size:
            #     print(grid[tuple(adjacent)] != "#", tuple(loc) not in connections[tuple(adjacent)], shift, connections[tuple(adjacent)])
            if adjacent[1 - direction] >= 0 and adjacent[1 - direction] < size and grid[tuple(adjacent)] != "#" and tuple(loc) not in connections[tuple(adjacent)]:
                return False
        if crossword[tuple(loc)] != "#" and (crossword[tuple(loc)] != char or cell_direction[tuple(loc)] != str(1 - direction)):
            return False
    return True


def intersectingHead(word, direction, cell_direction, crossword):
    if set(crossword.values()) == {"#"}:
        return [0, 0]

    allowedHeads = []
    for (k, v) in crossword.items():
        if v not in word:
            continue
        if str(direction) in cell_direction[k]:
            continue
        match = word.index(v)
        head = list(k)
        head[direction] -= match
        allowedHeads.append(head)
    return allowedHeads


def addToGrid(word, sequence, direction, grid, cell_direction, connections):
    for (loc, char) in zip(sequence, word):
        grid[tuple(loc)] = char
        cell_direction[tuple(loc)] += str(direction)
        for locprime in sequence:
            if locprime != loc:
                connections[tuple(loc)].append(tuple(locprime))


def removeFromGrid(word, sequence, direction, grid, cell_direction, connections):
    for (loc, char) in zip(sequence, word):
        for i in range(len(sequence)-1):
            connections[tuple(loc)].pop(-1)
        if len(cell_direction[tuple(loc)]) == 1:
            grid[tuple(loc)] = '#'
            cell_direction[tuple(loc)] = ""
        else:
            cell_direction[tuple(loc)] = cell_direction[tuple(loc)][:-1]


def getSequence(head, direction, word):
    if direction == 0:
        return [[head[0] + i, head[1]] for i in range(len(word))]
    else:
        return [[head[0], head[1] + i] for i in range(len(word))]


def createGrid(grid, words_list, size, direction, cell_direction, classification, depth, connections):
    # for (k,v) in connections.items():
    #     if len(v) > 2:
    #         print(k, v, len(words_list), direction, depth)
    #         assert False
    # for i in range(size):
    #     print(" ".join([grid[(i, j)] for j in range(size)]))
    # print(words_list[0])
    for word in words_list:
        for direction in [direction,]:
            if set(grid.values()) == {"#"}:
                allowedHeads = [[i, j] for i in range(size) for j in range(size)]
            else:
                allowedHeads = intersectingHead(word, direction, cell_direction, grid)
            for head in allowedHeads:
                depth += 1
                if depth > MAX_DEPTH:
                    return grid, cell_direction, False, classification, depth
                sequence = getSequence(head, direction, word)
                accept = isAcceptable(word, sequence, direction, grid, cell_direction, size, connections)
                if accept:
                    addToGrid(word, sequence, direction, grid, cell_direction, connections)
                    if len(words_list) > 1:
                        grid, cell_direction, accept, classification, depth = createGrid(grid, [w for w in words_list if w != word], size, 1 - direction, cell_direction, classification, depth, connections)
                    if accept:
                        classification[direction].append((size * sequence[0][0] + sequence[0][1], word))
                        return grid, cell_direction, accept, classification, depth
                    else:
                        removeFromGrid(word, sequence, direction, grid, cell_direction, connections)
    if not accept:
        return grid, cell_direction, False, classification, depth


MAX_ITER = 100
MAX_DEPTH = 100000
size, reqIntersections, words_data = loadData("crossword.json")
# sorted_words = ['CHRONOMETER', 'SIRIUS', 'SOLSTICE', 'EQUINOX', 'PULSAR', 'ANDROMEDA', 'APHELION', 'SUPERNOVA', 'PARALLAX', 'QUASAR', 'NEBULA', 'CASSIOPEIA', 'ASTROLABE', 'SPECTROSCOPE', 'VOYAGER'] 
sorted_words = sorted(words_data.keys(), key=len, reverse=True)
# sorted_words = random.sample(sorted_words, k=len(sorted_words))
accept = False

for i in tqdm(range(MAX_ITER)):
    grid = {(i,j): "#" for i in range(size) for j in range(size)}
    cell_direction = {(i,j): "" for i in range(size) for j in range(size)}
    connections = {(i,j): [(i,j)] for i in range(size) for j in range(size)}
    classification = {0: [], 1: []}
    grid, cell_direction, accept, classification, depth = createGrid(grid, sorted_words, size, 0, cell_direction, classification, 0, connections)
    if accept and sum([1 for v in cell_direction.values() if len(v) > 1]) >= reqIntersections:
        print(sorted_words)
        break
    sorted_words = random.sample(sorted_words, k=len(sorted_words))
print(classification)
print(sum([1 for v in cell_direction.values() if len(v) > 1]))
hints = {"down": {word: [loc, words_data[word]] for (loc, word) in classification[0]}, "across": {word: [loc, words_data[word]] for (loc, word) in classification[1]}, "blanks": [j * size + i for i in range(size) for j in range(size) if grid[(j, i)] == "#"], "size": size}
assert accept
with open('issue4.json', 'w', encoding='utf-8') as f:
    json.dump(hints, f, ensure_ascii=False, indent=4)

for i in range(size):
    print(" ".join([grid[(i, j)] for j in range(size)]))
