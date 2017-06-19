
// addUser,
//     deleteUser,
//     createProfile,
//     editProfile,
//     mapSearch,



export function addUser(oldStore, options) {
    
}

export function deleteUser(oldStore, options) {
    
}

export function createProfile(oldStore, options) {
    
}

export function editProfile(oldStore, options) {
    
}

export function mapSearch(oldStore, options) {
    
}

// export function inactivateAlarm(oldStore, options) {
//     const {time} = options;
//     const {active_alarms, inactive_alarms} = oldStore;

//     return Promise.resolve().then(_ => {
//         const [newA, newIn] = active_alarms.reduce((_arr, a) => {
//             if (a.time !== time) {
//                 _arr[0].push(a);
//             }
//             else {
//                 _arr[1].push(a);
//             }
//             return _arr;
//         }, [[], inactive_alarms]);
    	
//     	return Object.assign({}, oldStore, {
//     		active_alarms: newA,
//             inactive_alarms: newIn,
//     	});
//     })
// }

