import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }

    }
})