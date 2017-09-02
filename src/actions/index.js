function itemsHasErrored(bool) {
    return {
        type: 'ERROR',
        hasErrored: bool
    };
}

function itemsIsLoading(bool) {
    return {
        type: 'LOADING',
        isLoading: bool
    };
}

function itemsFetchDataSuccess(items) {
    return {
        type: 'SUCCESS',
        items: items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
