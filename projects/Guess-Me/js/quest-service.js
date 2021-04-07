var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
const KEY = 'Quest-tree'

function createQuestsTree() {
    if (!loadFromStorage(KEY)) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
        saveToStorage(KEY, gQuestsTree)
    } else {
        gQuestsTree = loadFromStorage(KEY)
    }
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest
    gCurrQuest = gCurrQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree
    var newQuest = createQuest(newQuestTxt)
    newQuest.yes = createQuest(newGuessTxt)
    newQuest.no = gCurrQuest
    gPrevQuest[lastRes] = newQuest
    saveToStorage(KEY, gQuestsTree)
}

function getCurrQuest() {
    return gCurrQuest
}

function resetGame() {
    gPrevQuest = null;
    gCurrQuest = gQuestsTree;
}

