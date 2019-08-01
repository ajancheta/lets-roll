const initState = {
    locations: [
        {id: '1', name: 'test one', address: 'test test test test '},
        {id: '2', name: 'test two', address: 'test two test two test two test '},
        {id: '3', name: 'test three', address: 'test three test three test three test '},
    ]
}

const locationReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_LOCATION':
            console.log('created project')
    }
    return state
}

export default locationReducer;