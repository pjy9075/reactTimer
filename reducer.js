//import



//Actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

//Action's creators
function startTimer() {
    return {
        type:START_TIMER
        }
    }

function restartTimer(){
    return {
        type:RESTART_TIMER
    }
    
}

function addSecond() {
    return {
        type:ADD_SECOND
    }
}

//reducer
const TIMER_DURATION=1500;

const initialState={
    isPlaying:false,
    elapsedTime:0,
    timeDuration:TIMER_DURATION
}

//reducer's functions
function reducer(state=initialState , action) {
    switch (action.type) {
        case START_TIMER :
            return applyStartTimer(state,action);

        case RESTART_TIMER :
            return applyRestartTimer(state,action);

        case ADD_SECOND :
            return applyAddSecond(state,action);
        default :
            return state;
    }
}

//function Calculator (applyStartTimer.elapsedTime) {}
//action's creators

function applyStartTimer(state, action) {
    return {
        ...state,
        isPlaying:true,
        elapsedTime:0
       
    }
}
function applyRestartTimer(state, action) {
    return {
        ...state,
        isPlaying:false,
        elapsedTime:0
    }
}
function applyAddSecond(state, action) {
    const {elapsedTime}=state;

    if(elapsedTime < TIMER_DURATION){
        return{
            ...state,
            elapsedTime: elapsedTime + 1
        };
    }
else {
    return {
        ...state,
        isPlaying:false
    }
}
          
        }
const actionCreators ={
    startTimer,
    restartTimer,
    addSecond,
}

export {actionCreators};
//

export default reducer;
