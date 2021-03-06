import * as actionType from './shopping-type';

export const addToCart = (itemID) => {
    return {
        type: actionType.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeToCart = (itemID) => {
    return {
        type: actionType.REMOVE_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const addJustQTY = (itemID, value) => {
    return {
        type: actionType.ADJUST_QTY,
        payload: {
            id: itemID,
            qty:value
        }
    }
}

export const loadCurrentItem = (itemID) => {
    return {
        type: actionType.LOAD_CURRENT_ITEM,
        payload: itemID
    }
}