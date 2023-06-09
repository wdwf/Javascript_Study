const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = false;

function canExecuteFastAttack(knightIsAwake) {
    if(knightIsAwake) {
        return false
    } 
    return true
}


function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if(knightIsAwake || archerIsAwake || prisonerIsAwake) {
        return true
    }
    return false
}



function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if(archerIsAwake) {
        return false
    }
    if(prisonerIsAwake) {
        return true
    }
    return false
}


function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
    if(petDogIsPresent) {
        if(archerIsAwake) {
            return false
        }
        return true
    }
    
    if(prisonerIsAwake) {
        if(knightIsAwake && archerIsAwake) {
            return false
        }
        return true
    }

    return false
}

// canExecuteFastAttack(knightIsAwake)
// canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)
// canSignalPrisoner(archerIsAwake, prisonerIsAwake)
canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)
