import {
    addUser,
    deleteUser,
    createProfile,
    editProfile,
    mapSearch,
} from './reducers';

export const actions = {
	// 'UPDATE_IDX': (oldStore, options) => updateIndex(oldStore, options),
	'ADD_USER': (oldStore, options) => addUser(oldStore, options),
    'DELETE_USER': (oldStore, options) => deleteUser(oldStore, options),
    'CREATE_PROFILE': (oldStore, options) => createProfile(oldStore, options),
    'EDIT_PROFILE': (oldStore, options) => editProfile(oldStore, options),
    'MAP_SEARCH':  (oldStore, options) => mapSearch(oldStore, options),
}
