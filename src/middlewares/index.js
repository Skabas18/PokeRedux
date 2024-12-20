export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

export const featuring = (store) => (next) => (actionInfo) =>{
    const featured = [{name: 'personalizado'}, ...actionInfo.action.payload];
    const upodatedActionInfo = {
        ...actionInfo,
        action: {...actionInfo.action, payload: featured}
    };
    next(upodatedActionInfo);
};