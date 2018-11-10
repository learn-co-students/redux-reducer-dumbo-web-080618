export function manageFriends(state, action){
  console.log("!!!!!!!!!!!!!!!!", action)
  switch(action.type){
    case 'ADD_FRIEND':
      let newState = {...state, friends: [...state.friends, action.friend]}
      return newState
    case 'REMOVE_FRIEND':
      let newFriends = state.friends.filter(friend => friend.id !== action.id)
      return {...state, friends: newFriends}
    default:
      return {...state}
  }
}
